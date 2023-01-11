package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomMetricsArchiveRequest {
    public AnalyticsadminPropertiesCustomMetricsArchivePathParams pathParams;
    public AnalyticsadminPropertiesCustomMetricsArchiveRequest withPathParams(AnalyticsadminPropertiesCustomMetricsArchivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesCustomMetricsArchiveQueryParams queryParams;
    public AnalyticsadminPropertiesCustomMetricsArchiveRequest withQueryParams(AnalyticsadminPropertiesCustomMetricsArchiveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AnalyticsadminPropertiesCustomMetricsArchiveRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesCustomMetricsArchiveSecurity security;
    public AnalyticsadminPropertiesCustomMetricsArchiveRequest withSecurity(AnalyticsadminPropertiesCustomMetricsArchiveSecurity security) {
        this.security = security;
        return this;
    }
}