package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingCampaignsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingCampaignsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserGroupIds")
    public String[] advertiserGroupIds;
    public DfareportingCampaignsListQueryParams withAdvertiserGroupIds(String[] advertiserGroupIds) {
        this.advertiserGroupIds = advertiserGroupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserIds")
    public String[] advertiserIds;
    public DfareportingCampaignsListQueryParams withAdvertiserIds(String[] advertiserIds) {
        this.advertiserIds = advertiserIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingCampaignsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public DfareportingCampaignsListQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=atLeastOneOptimizationActivity")
    public Boolean atLeastOneOptimizationActivity;
    public DfareportingCampaignsListQueryParams withAtLeastOneOptimizationActivity(Boolean atLeastOneOptimizationActivity) {
        this.atLeastOneOptimizationActivity = atLeastOneOptimizationActivity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingCampaignsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludedIds")
    public String[] excludedIds;
    public DfareportingCampaignsListQueryParams withExcludedIds(String[] excludedIds) {
        this.excludedIds = excludedIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingCampaignsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingCampaignsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingCampaignsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingCampaignsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingCampaignsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=overriddenEventTagId")
    public String overriddenEventTagId;
    public DfareportingCampaignsListQueryParams withOverriddenEventTagId(String overriddenEventTagId) {
        this.overriddenEventTagId = overriddenEventTagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingCampaignsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingCampaignsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingCampaignsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingCampaignsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingCampaignsListSortFieldEnum sortField;
    public DfareportingCampaignsListQueryParams withSortField(DfareportingCampaignsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingCampaignsListSortOrderEnum sortOrder;
    public DfareportingCampaignsListQueryParams withSortOrder(DfareportingCampaignsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subaccountId")
    public String subaccountId;
    public DfareportingCampaignsListQueryParams withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingCampaignsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingCampaignsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}