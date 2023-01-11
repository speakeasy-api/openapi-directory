package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesGoogleAdsLinksCreateRequest {
    public AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams pathParams;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateRequest withPathParams(AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesGoogleAdsLinksCreateQueryParams queryParams;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateRequest withQueryParams(AnalyticsadminPropertiesGoogleAdsLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput request;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity security;
    public AnalyticsadminPropertiesGoogleAdsLinksCreateRequest withSecurity(AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}