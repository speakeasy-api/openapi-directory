package openapisdk.models.operations;



public class MonitoringUptimeCheckIpsListRequest {
    public MonitoringUptimeCheckIpsListQueryParams queryParams;
    public MonitoringUptimeCheckIpsListRequest withQueryParams(MonitoringUptimeCheckIpsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MonitoringUptimeCheckIpsListSecurity security;
    public MonitoringUptimeCheckIpsListRequest withSecurity(MonitoringUptimeCheckIpsListSecurity security) {
        this.security = security;
        return this;
    }
}