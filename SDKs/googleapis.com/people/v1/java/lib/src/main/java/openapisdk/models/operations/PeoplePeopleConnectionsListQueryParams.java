package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleConnectionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public PeoplePeopleConnectionsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public PeoplePeopleConnectionsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PeoplePeopleConnectionsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PeoplePeopleConnectionsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PeoplePeopleConnectionsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PeoplePeopleConnectionsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PeoplePeopleConnectionsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public PeoplePeopleConnectionsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public PeoplePeopleConnectionsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=personFields")
    public String personFields;
    public PeoplePeopleConnectionsListQueryParams withPersonFields(String personFields) {
        this.personFields = personFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PeoplePeopleConnectionsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PeoplePeopleConnectionsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestMask.includeField")
    public String requestMaskIncludeField;
    public PeoplePeopleConnectionsListQueryParams withRequestMaskIncludeField(String requestMaskIncludeField) {
        this.requestMaskIncludeField = requestMaskIncludeField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestSyncToken")
    public Boolean requestSyncToken;
    public PeoplePeopleConnectionsListQueryParams withRequestSyncToken(Boolean requestSyncToken) {
        this.requestSyncToken = requestSyncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public PeoplePeopleConnectionsListSortOrderEnum sortOrder;
    public PeoplePeopleConnectionsListQueryParams withSortOrder(PeoplePeopleConnectionsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sources")
    public PeoplePeopleConnectionsListSourcesEnum[] sources;
    public PeoplePeopleConnectionsListQueryParams withSources(PeoplePeopleConnectionsListSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncToken")
    public String syncToken;
    public PeoplePeopleConnectionsListQueryParams withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public PeoplePeopleConnectionsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public PeoplePeopleConnectionsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}