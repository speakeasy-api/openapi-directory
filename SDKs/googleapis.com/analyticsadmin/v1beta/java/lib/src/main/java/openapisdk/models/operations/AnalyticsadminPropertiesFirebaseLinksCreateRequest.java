package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesFirebaseLinksCreateRequest {
    public AnalyticsadminPropertiesFirebaseLinksCreatePathParams pathParams;
    public AnalyticsadminPropertiesFirebaseLinksCreateRequest withPathParams(AnalyticsadminPropertiesFirebaseLinksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesFirebaseLinksCreateQueryParams queryParams;
    public AnalyticsadminPropertiesFirebaseLinksCreateRequest withQueryParams(AnalyticsadminPropertiesFirebaseLinksCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLinkInput request;
    public AnalyticsadminPropertiesFirebaseLinksCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesFirebaseLinksCreateSecurity security;
    public AnalyticsadminPropertiesFirebaseLinksCreateRequest withSecurity(AnalyticsadminPropertiesFirebaseLinksCreateSecurity security) {
        this.security = security;
        return this;
    }
}