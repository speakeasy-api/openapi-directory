package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleListDirectoryPeopleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public PeoplePeopleListDirectoryPeopleQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public PeoplePeopleListDirectoryPeopleQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PeoplePeopleListDirectoryPeopleQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PeoplePeopleListDirectoryPeopleQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PeoplePeopleListDirectoryPeopleQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PeoplePeopleListDirectoryPeopleQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mergeSources")
    public PeoplePeopleListDirectoryPeopleMergeSourcesEnum[] mergeSources;
    public PeoplePeopleListDirectoryPeopleQueryParams withMergeSources(PeoplePeopleListDirectoryPeopleMergeSourcesEnum[] mergeSources) {
        this.mergeSources = mergeSources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PeoplePeopleListDirectoryPeopleQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public PeoplePeopleListDirectoryPeopleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public PeoplePeopleListDirectoryPeopleQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PeoplePeopleListDirectoryPeopleQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PeoplePeopleListDirectoryPeopleQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=readMask")
    public String readMask;
    public PeoplePeopleListDirectoryPeopleQueryParams withReadMask(String readMask) {
        this.readMask = readMask;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestSyncToken")
    public Boolean requestSyncToken;
    public PeoplePeopleListDirectoryPeopleQueryParams withRequestSyncToken(Boolean requestSyncToken) {
        this.requestSyncToken = requestSyncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sources")
    public PeoplePeopleListDirectoryPeopleSourcesEnum[] sources;
    public PeoplePeopleListDirectoryPeopleQueryParams withSources(PeoplePeopleListDirectoryPeopleSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncToken")
    public String syncToken;
    public PeoplePeopleListDirectoryPeopleQueryParams withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public PeoplePeopleListDirectoryPeopleQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public PeoplePeopleListDirectoryPeopleQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}