package openapisdk.models.operations;



public class MonitorKeyUsageRequest {
    public MonitorKeyUsagePathParams pathParams;
    public MonitorKeyUsageRequest withPathParams(MonitorKeyUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MonitorKeyUsageQueryParams queryParams;
    public MonitorKeyUsageRequest withQueryParams(MonitorKeyUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitorKeyUsageSecurity security;
    public MonitorKeyUsageRequest withSecurity(MonitorKeyUsageSecurity security) {
        this.security = security;
        return this;
    }
}