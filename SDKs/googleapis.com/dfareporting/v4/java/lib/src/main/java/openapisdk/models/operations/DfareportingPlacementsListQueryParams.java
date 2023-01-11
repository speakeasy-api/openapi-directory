package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingPlacementsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingPlacementsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activeStatus")
    public DfareportingPlacementsListActiveStatusEnum[] activeStatus;
    public DfareportingPlacementsListQueryParams withActiveStatus(DfareportingPlacementsListActiveStatusEnum[] activeStatus) {
        this.activeStatus = activeStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserIds")
    public String[] advertiserIds;
    public DfareportingPlacementsListQueryParams withAdvertiserIds(String[] advertiserIds) {
        this.advertiserIds = advertiserIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingPlacementsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingPlacementsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignIds")
    public String[] campaignIds;
    public DfareportingPlacementsListQueryParams withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=compatibilities")
    public DfareportingPlacementsListCompatibilitiesEnum[] compatibilities;
    public DfareportingPlacementsListQueryParams withCompatibilities(DfareportingPlacementsListCompatibilitiesEnum[] compatibilities) {
        this.compatibilities = compatibilities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentCategoryIds")
    public String[] contentCategoryIds;
    public DfareportingPlacementsListQueryParams withContentCategoryIds(String[] contentCategoryIds) {
        this.contentCategoryIds = contentCategoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=directorySiteIds")
    public String[] directorySiteIds;
    public DfareportingPlacementsListQueryParams withDirectorySiteIds(String[] directorySiteIds) {
        this.directorySiteIds = directorySiteIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingPlacementsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupIds")
    public String[] groupIds;
    public DfareportingPlacementsListQueryParams withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingPlacementsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingPlacementsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxEndDate")
    public String maxEndDate;
    public DfareportingPlacementsListQueryParams withMaxEndDate(String maxEndDate) {
        this.maxEndDate = maxEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingPlacementsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxStartDate")
    public String maxStartDate;
    public DfareportingPlacementsListQueryParams withMaxStartDate(String maxStartDate) {
        this.maxStartDate = maxStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minEndDate")
    public String minEndDate;
    public DfareportingPlacementsListQueryParams withMinEndDate(String minEndDate) {
        this.minEndDate = minEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minStartDate")
    public String minStartDate;
    public DfareportingPlacementsListQueryParams withMinStartDate(String minStartDate) {
        this.minStartDate = minStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingPlacementsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingPlacementsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentSource")
    public DfareportingPlacementsListPaymentSourceEnum paymentSource;
    public DfareportingPlacementsListQueryParams withPaymentSource(DfareportingPlacementsListPaymentSourceEnum paymentSource) {
        this.paymentSource = paymentSource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=placementStrategyIds")
    public String[] placementStrategyIds;
    public DfareportingPlacementsListQueryParams withPlacementStrategyIds(String[] placementStrategyIds) {
        this.placementStrategyIds = placementStrategyIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingPlacementsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pricingTypes")
    public DfareportingPlacementsListPricingTypesEnum[] pricingTypes;
    public DfareportingPlacementsListQueryParams withPricingTypes(DfareportingPlacementsListPricingTypesEnum[] pricingTypes) {
        this.pricingTypes = pricingTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingPlacementsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingPlacementsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteIds")
    public String[] siteIds;
    public DfareportingPlacementsListQueryParams withSiteIds(String[] siteIds) {
        this.siteIds = siteIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sizeIds")
    public String[] sizeIds;
    public DfareportingPlacementsListQueryParams withSizeIds(String[] sizeIds) {
        this.sizeIds = sizeIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingPlacementsListSortFieldEnum sortField;
    public DfareportingPlacementsListQueryParams withSortField(DfareportingPlacementsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingPlacementsListSortOrderEnum sortOrder;
    public DfareportingPlacementsListQueryParams withSortOrder(DfareportingPlacementsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingPlacementsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingPlacementsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}