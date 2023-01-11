package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest {
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams pathParams;
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest withPathParams(AnalyticsadminPropertiesAcknowledgeUserDataCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams queryParams;
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest withQueryParams(AnalyticsadminPropertiesAcknowledgeUserDataCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest request;
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity security;
    public AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest withSecurity(AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity security) {
        this.security = security;
        return this;
    }
}