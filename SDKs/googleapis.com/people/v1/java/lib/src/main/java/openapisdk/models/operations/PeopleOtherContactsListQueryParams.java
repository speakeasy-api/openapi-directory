package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleOtherContactsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public PeopleOtherContactsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public PeopleOtherContactsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PeopleOtherContactsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PeopleOtherContactsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PeopleOtherContactsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PeopleOtherContactsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PeopleOtherContactsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public PeopleOtherContactsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public PeopleOtherContactsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PeopleOtherContactsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PeopleOtherContactsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=readMask")
    public String readMask;
    public PeopleOtherContactsListQueryParams withReadMask(String readMask) {
        this.readMask = readMask;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestSyncToken")
    public Boolean requestSyncToken;
    public PeopleOtherContactsListQueryParams withRequestSyncToken(Boolean requestSyncToken) {
        this.requestSyncToken = requestSyncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sources")
    public PeopleOtherContactsListSourcesEnum[] sources;
    public PeopleOtherContactsListQueryParams withSources(PeopleOtherContactsListSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncToken")
    public String syncToken;
    public PeopleOtherContactsListQueryParams withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public PeopleOtherContactsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public PeopleOtherContactsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}