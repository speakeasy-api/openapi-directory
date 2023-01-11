package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesGoogleAdsLinksPatchRequest {
    public AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams pathParams;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchRequest withPathParams(AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesGoogleAdsLinksPatchQueryParams queryParams;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchRequest withQueryParams(AnalyticsadminPropertiesGoogleAdsLinksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput request;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity security;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchRequest withSecurity(AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity security) {
        this.security = security;
        return this;
    }
}