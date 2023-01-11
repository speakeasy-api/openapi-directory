package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingEventTagsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingEventTagsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingEventTagsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adId")
    public String adId;
    public DfareportingEventTagsListQueryParams withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserId")
    public String advertiserId;
    public DfareportingEventTagsListQueryParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingEventTagsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingEventTagsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignId")
    public String campaignId;
    public DfareportingEventTagsListQueryParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=definitionsOnly")
    public Boolean definitionsOnly;
    public DfareportingEventTagsListQueryParams withDefinitionsOnly(Boolean definitionsOnly) {
        this.definitionsOnly = definitionsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enabled")
    public Boolean enabled;
    public DfareportingEventTagsListQueryParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventTagTypes")
    public DfareportingEventTagsListEventTagTypesEnum[] eventTagTypes;
    public DfareportingEventTagsListQueryParams withEventTagTypes(DfareportingEventTagsListEventTagTypesEnum[] eventTagTypes) {
        this.eventTagTypes = eventTagTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingEventTagsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingEventTagsListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingEventTagsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingEventTagsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingEventTagsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingEventTagsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingEventTagsListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingEventTagsListSortFieldEnum sortField;
    public DfareportingEventTagsListQueryParams withSortField(DfareportingEventTagsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingEventTagsListSortOrderEnum sortOrder;
    public DfareportingEventTagsListQueryParams withSortOrder(DfareportingEventTagsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingEventTagsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingEventTagsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}