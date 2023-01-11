package openapisdk.models.operations;



public class MonitoringUptimeCheckIpsListResponse {
    public String contentType;
    public MonitoringUptimeCheckIpsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUptimeCheckIpsResponse listUptimeCheckIpsResponse;
    public MonitoringUptimeCheckIpsListResponse withListUptimeCheckIpsResponse(openapisdk.models.shared.ListUptimeCheckIpsResponse listUptimeCheckIpsResponse) {
        this.listUptimeCheckIpsResponse = listUptimeCheckIpsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringUptimeCheckIpsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}