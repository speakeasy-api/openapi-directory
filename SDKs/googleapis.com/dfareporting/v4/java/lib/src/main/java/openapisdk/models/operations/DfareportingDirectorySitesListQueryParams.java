package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDirectorySitesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DfareportingDirectorySitesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsInStreamVideoPlacements")
    public Boolean acceptsInStreamVideoPlacements;
    public DfareportingDirectorySitesListQueryParams withAcceptsInStreamVideoPlacements(Boolean acceptsInStreamVideoPlacements) {
        this.acceptsInStreamVideoPlacements = acceptsInStreamVideoPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsInterstitialPlacements")
    public Boolean acceptsInterstitialPlacements;
    public DfareportingDirectorySitesListQueryParams withAcceptsInterstitialPlacements(Boolean acceptsInterstitialPlacements) {
        this.acceptsInterstitialPlacements = acceptsInterstitialPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsPublisherPaidPlacements")
    public Boolean acceptsPublisherPaidPlacements;
    public DfareportingDirectorySitesListQueryParams withAcceptsPublisherPaidPlacements(Boolean acceptsPublisherPaidPlacements) {
        this.acceptsPublisherPaidPlacements = acceptsPublisherPaidPlacements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DfareportingDirectorySitesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=active")
    public Boolean active;
    public DfareportingDirectorySitesListQueryParams withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DfareportingDirectorySitesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DfareportingDirectorySitesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dfpNetworkCode")
    public String dfpNetworkCode;
    public DfareportingDirectorySitesListQueryParams withDfpNetworkCode(String dfpNetworkCode) {
        this.dfpNetworkCode = dfpNetworkCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DfareportingDirectorySitesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public DfareportingDirectorySitesListQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DfareportingDirectorySitesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public DfareportingDirectorySitesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DfareportingDirectorySitesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DfareportingDirectorySitesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DfareportingDirectorySitesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DfareportingDirectorySitesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchString")
    public String searchString;
    public DfareportingDirectorySitesListQueryParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingDirectorySitesListSortFieldEnum sortField;
    public DfareportingDirectorySitesListQueryParams withSortField(DfareportingDirectorySitesListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingDirectorySitesListSortOrderEnum sortOrder;
    public DfareportingDirectorySitesListQueryParams withSortOrder(DfareportingDirectorySitesListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DfareportingDirectorySitesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DfareportingDirectorySitesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}