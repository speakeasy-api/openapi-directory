package openapisdk.models.operations;



public class MonitoringProjectsUptimeCheckConfigsCreateResponse {
    public String contentType;
    public MonitoringProjectsUptimeCheckConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsUptimeCheckConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UptimeCheckConfig uptimeCheckConfig;
    public MonitoringProjectsUptimeCheckConfigsCreateResponse withUptimeCheckConfig(openapisdk.models.shared.UptimeCheckConfig uptimeCheckConfig) {
        this.uptimeCheckConfig = uptimeCheckConfig;
        return this;
    }
}