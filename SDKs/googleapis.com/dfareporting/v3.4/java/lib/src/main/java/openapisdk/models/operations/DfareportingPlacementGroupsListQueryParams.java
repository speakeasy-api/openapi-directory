package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementGroupsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingPlacementGroupsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingPlacementGroupsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserIds")
    public String[] advertiserIds;
    public DfareportingPlacementGroupsListQueryParams withAdvertiserIds(String[] advertiserIds) {
        this.advertiserIds = advertiserIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingPlacementGroupsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public DfareportingPlacementGroupsListQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingPlacementGroupsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignIds")
    public String[] campaignIds;
    public DfareportingPlacementGroupsListQueryParams withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentCategoryIds")
    public String[] contentCategoryIds;
    public DfareportingPlacementGroupsListQueryParams withContentCategoryIds(String[] contentCategoryIds) {
        this.contentCategoryIds = contentCategoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=directorySiteIds")
    public String[] directorySiteIds;
    public DfareportingPlacementGroupsListQueryParams withDirectorySiteIds(String[] directorySiteIds) {
        this.directorySiteIds = directorySiteIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingPlacementGroupsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingPlacementGroupsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingPlacementGroupsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxEndDate")
    public String maxEndDate;
    public DfareportingPlacementGroupsListQueryParams withMaxEndDate(String maxEndDate) {
        this.maxEndDate = maxEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingPlacementGroupsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxStartDate")
    public String maxStartDate;
    public DfareportingPlacementGroupsListQueryParams withMaxStartDate(String maxStartDate) {
        this.maxStartDate = maxStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minEndDate")
    public String minEndDate;
    public DfareportingPlacementGroupsListQueryParams withMinEndDate(String minEndDate) {
        this.minEndDate = minEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minStartDate")
    public String minStartDate;
    public DfareportingPlacementGroupsListQueryParams withMinStartDate(String minStartDate) {
        this.minStartDate = minStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingPlacementGroupsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingPlacementGroupsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=placementGroupType")
    public DfareportingPlacementGroupsListPlacementGroupTypeEnum placementGroupType;
    public DfareportingPlacementGroupsListQueryParams withPlacementGroupType(DfareportingPlacementGroupsListPlacementGroupTypeEnum placementGroupType) {
        this.placementGroupType = placementGroupType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=placementStrategyIds")
    public String[] placementStrategyIds;
    public DfareportingPlacementGroupsListQueryParams withPlacementStrategyIds(String[] placementStrategyIds) {
        this.placementStrategyIds = placementStrategyIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingPlacementGroupsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pricingTypes")
    public DfareportingPlacementGroupsListPricingTypesEnum[] pricingTypes;
    public DfareportingPlacementGroupsListQueryParams withPricingTypes(DfareportingPlacementGroupsListPricingTypesEnum[] pricingTypes) {
        this.pricingTypes = pricingTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingPlacementGroupsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingPlacementGroupsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteIds")
    public String[] siteIds;
    public DfareportingPlacementGroupsListQueryParams withSiteIds(String[] siteIds) {
        this.siteIds = siteIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingPlacementGroupsListSortFieldEnum sortField;
    public DfareportingPlacementGroupsListQueryParams withSortField(DfareportingPlacementGroupsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingPlacementGroupsListSortOrderEnum sortOrder;
    public DfareportingPlacementGroupsListQueryParams withSortOrder(DfareportingPlacementGroupsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingPlacementGroupsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingPlacementGroupsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}