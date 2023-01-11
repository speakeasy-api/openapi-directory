package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFloodlightActivitiesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingFloodlightActivitiesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingFloodlightActivitiesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=advertiserId")
    public String advertiserId;
    public DfareportingFloodlightActivitiesListQueryParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingFloodlightActivitiesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingFloodlightActivitiesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingFloodlightActivitiesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=floodlightActivityGroupIds")
    public String[] floodlightActivityGroupIds;
    public DfareportingFloodlightActivitiesListQueryParams withFloodlightActivityGroupIds(String[] floodlightActivityGroupIds) {
        this.floodlightActivityGroupIds = floodlightActivityGroupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=floodlightActivityGroupName")
    public String floodlightActivityGroupName;
    public DfareportingFloodlightActivitiesListQueryParams withFloodlightActivityGroupName(String floodlightActivityGroupName) {
        this.floodlightActivityGroupName = floodlightActivityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=floodlightActivityGroupTagString")
    public String floodlightActivityGroupTagString;
    public DfareportingFloodlightActivitiesListQueryParams withFloodlightActivityGroupTagString(String floodlightActivityGroupTagString) {
        this.floodlightActivityGroupTagString = floodlightActivityGroupTagString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=floodlightActivityGroupType")
    public DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum floodlightActivityGroupType;
    public DfareportingFloodlightActivitiesListQueryParams withFloodlightActivityGroupType(DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum floodlightActivityGroupType) {
        this.floodlightActivityGroupType = floodlightActivityGroupType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=floodlightConfigurationId")
    public String floodlightConfigurationId;
    public DfareportingFloodlightActivitiesListQueryParams withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingFloodlightActivitiesListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingFloodlightActivitiesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingFloodlightActivitiesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingFloodlightActivitiesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingFloodlightActivitiesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingFloodlightActivitiesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingFloodlightActivitiesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingFloodlightActivitiesListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingFloodlightActivitiesListSortFieldEnum sortField;
    public DfareportingFloodlightActivitiesListQueryParams withSortField(DfareportingFloodlightActivitiesListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingFloodlightActivitiesListSortOrderEnum sortOrder;
    public DfareportingFloodlightActivitiesListQueryParams withSortOrder(DfareportingFloodlightActivitiesListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagString")
    public String tagString;
    public DfareportingFloodlightActivitiesListQueryParams withTagString(String tagString) {
        this.tagString = tagString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingFloodlightActivitiesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingFloodlightActivitiesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}