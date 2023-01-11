package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingProjectsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingProjectsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingProjectsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserIds")
    public String[] advertiserIds;
    public DfareportingProjectsListQueryParams withAdvertiserIds(String[] advertiserIds) {
        this.advertiserIds = advertiserIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingProjectsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingProjectsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingProjectsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingProjectsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingProjectsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingProjectsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingProjectsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingProjectsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingProjectsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingProjectsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingProjectsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingProjectsListSortFieldEnum sortField;
    public DfareportingProjectsListQueryParams withSortField(DfareportingProjectsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingProjectsListSortOrderEnum sortOrder;
    public DfareportingProjectsListQueryParams withSortOrder(DfareportingProjectsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingProjectsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingProjectsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}