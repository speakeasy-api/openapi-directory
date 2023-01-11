package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingAdsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingAdsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=active")
    public Boolean active;
    public DfareportingAdsListQueryParams withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserId")
    public String advertiserId;
    public DfareportingAdsListQueryParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingAdsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public DfareportingAdsListQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=audienceSegmentIds")
    public String[] audienceSegmentIds;
    public DfareportingAdsListQueryParams withAudienceSegmentIds(String[] audienceSegmentIds) {
        this.audienceSegmentIds = audienceSegmentIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingAdsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignIds")
    public String[] campaignIds;
    public DfareportingAdsListQueryParams withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=compatibility")
    public DfareportingAdsListCompatibilityEnum compatibility;
    public DfareportingAdsListQueryParams withCompatibility(DfareportingAdsListCompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creativeIds")
    public String[] creativeIds;
    public DfareportingAdsListQueryParams withCreativeIds(String[] creativeIds) {
        this.creativeIds = creativeIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creativeOptimizationConfigurationIds")
    public String[] creativeOptimizationConfigurationIds;
    public DfareportingAdsListQueryParams withCreativeOptimizationConfigurationIds(String[] creativeOptimizationConfigurationIds) {
        this.creativeOptimizationConfigurationIds = creativeOptimizationConfigurationIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dynamicClickTracker")
    public Boolean dynamicClickTracker;
    public DfareportingAdsListQueryParams withDynamicClickTracker(Boolean dynamicClickTracker) {
        this.dynamicClickTracker = dynamicClickTracker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingAdsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingAdsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingAdsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=landingPageIds")
    public String[] landingPageIds;
    public DfareportingAdsListQueryParams withLandingPageIds(String[] landingPageIds) {
        this.landingPageIds = landingPageIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingAdsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingAdsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=overriddenEventTagId")
    public String overriddenEventTagId;
    public DfareportingAdsListQueryParams withOverriddenEventTagId(String overriddenEventTagId) {
        this.overriddenEventTagId = overriddenEventTagId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingAdsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=placementIds")
    public String[] placementIds;
    public DfareportingAdsListQueryParams withPlacementIds(String[] placementIds) {
        this.placementIds = placementIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingAdsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingAdsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remarketingListIds")
    public String[] remarketingListIds;
    public DfareportingAdsListQueryParams withRemarketingListIds(String[] remarketingListIds) {
        this.remarketingListIds = remarketingListIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingAdsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sizeIds")
    public String[] sizeIds;
    public DfareportingAdsListQueryParams withSizeIds(String[] sizeIds) {
        this.sizeIds = sizeIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingAdsListSortFieldEnum sortField;
    public DfareportingAdsListQueryParams withSortField(DfareportingAdsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingAdsListSortOrderEnum sortOrder;
    public DfareportingAdsListQueryParams withSortOrder(DfareportingAdsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sslCompliant")
    public Boolean sslCompliant;
    public DfareportingAdsListQueryParams withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sslRequired")
    public Boolean sslRequired;
    public DfareportingAdsListQueryParams withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DfareportingAdsListTypeEnum[] type;
    public DfareportingAdsListQueryParams withType(DfareportingAdsListTypeEnum[] type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingAdsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingAdsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}