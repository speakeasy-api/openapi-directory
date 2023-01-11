package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSitesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingSitesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsInStreamVideoPlacements")
    public Boolean acceptsInStreamVideoPlacements;
    public DfareportingSitesListQueryParams withAcceptsInStreamVideoPlacements(Boolean acceptsInStreamVideoPlacements) {
        this.acceptsInStreamVideoPlacements = acceptsInStreamVideoPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsInterstitialPlacements")
    public Boolean acceptsInterstitialPlacements;
    public DfareportingSitesListQueryParams withAcceptsInterstitialPlacements(Boolean acceptsInterstitialPlacements) {
        this.acceptsInterstitialPlacements = acceptsInterstitialPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsPublisherPaidPlacements")
    public Boolean acceptsPublisherPaidPlacements;
    public DfareportingSitesListQueryParams withAcceptsPublisherPaidPlacements(Boolean acceptsPublisherPaidPlacements) {
        this.acceptsPublisherPaidPlacements = acceptsPublisherPaidPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingSitesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adWordsSite")
    public Boolean adWordsSite;
    public DfareportingSitesListQueryParams withAdWordsSite(Boolean adWordsSite) {
        this.adWordsSite = adWordsSite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingSitesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=approved")
    public Boolean approved;
    public DfareportingSitesListQueryParams withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingSitesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaignIds")
    public String[] campaignIds;
    public DfareportingSitesListQueryParams withCampaignIds(String[] campaignIds) {
        this.campaignIds = campaignIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=directorySiteIds")
    public String[] directorySiteIds;
    public DfareportingSitesListQueryParams withDirectorySiteIds(String[] directorySiteIds) {
        this.directorySiteIds = directorySiteIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingSitesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingSitesListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingSitesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingSitesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingSitesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingSitesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingSitesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingSitesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingSitesListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingSitesListSortFieldEnum sortField;
    public DfareportingSitesListQueryParams withSortField(DfareportingSitesListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingSitesListSortOrderEnum sortOrder;
    public DfareportingSitesListQueryParams withSortOrder(DfareportingSitesListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subaccountId")
    public String subaccountId;
    public DfareportingSitesListQueryParams withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unmappedSite")
    public Boolean unmappedSite;
    public DfareportingSitesListQueryParams withUnmappedSite(Boolean unmappedSite) {
        this.unmappedSite = unmappedSite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingSitesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingSitesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}