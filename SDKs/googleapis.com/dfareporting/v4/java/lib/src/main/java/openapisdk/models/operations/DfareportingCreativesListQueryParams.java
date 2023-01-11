package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingCreativesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingCreativesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=active")
    public Boolean active;
    public DfareportingCreativesListQueryParams withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserId")
    public String advertiserId;
    public DfareportingCreativesListQueryParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingCreativesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public DfareportingCreativesListQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingCreativesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignId")
    public String campaignId;
    public DfareportingCreativesListQueryParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=companionCreativeIds")
    public String[] companionCreativeIds;
    public DfareportingCreativesListQueryParams withCompanionCreativeIds(String[] companionCreativeIds) {
        this.companionCreativeIds = companionCreativeIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creativeFieldIds")
    public String[] creativeFieldIds;
    public DfareportingCreativesListQueryParams withCreativeFieldIds(String[] creativeFieldIds) {
        this.creativeFieldIds = creativeFieldIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingCreativesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingCreativesListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingCreativesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingCreativesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingCreativesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingCreativesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingCreativesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingCreativesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=renderingIds")
    public String[] renderingIds;
    public DfareportingCreativesListQueryParams withRenderingIds(String[] renderingIds) {
        this.renderingIds = renderingIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingCreativesListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sizeIds")
    public String[] sizeIds;
    public DfareportingCreativesListQueryParams withSizeIds(String[] sizeIds) {
        this.sizeIds = sizeIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingCreativesListSortFieldEnum sortField;
    public DfareportingCreativesListQueryParams withSortField(DfareportingCreativesListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingCreativesListSortOrderEnum sortOrder;
    public DfareportingCreativesListQueryParams withSortOrder(DfareportingCreativesListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=studioCreativeId")
    public String studioCreativeId;
    public DfareportingCreativesListQueryParams withStudioCreativeId(String studioCreativeId) {
        this.studioCreativeId = studioCreativeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=types")
    public DfareportingCreativesListTypesEnum[] types;
    public DfareportingCreativesListQueryParams withTypes(DfareportingCreativesListTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingCreativesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingCreativesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}