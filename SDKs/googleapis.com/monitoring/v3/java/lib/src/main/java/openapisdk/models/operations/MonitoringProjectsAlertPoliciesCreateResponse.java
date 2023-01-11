package openapisdk.models.operations;



public class MonitoringProjectsAlertPoliciesCreateResponse {
    public openapisdk.models.shared.AlertPolicy alertPolicy;
    public MonitoringProjectsAlertPoliciesCreateResponse withAlertPolicy(openapisdk.models.shared.AlertPolicy alertPolicy) {
        this.alertPolicy = alertPolicy;
        return this;
    }
    public String contentType;
    public MonitoringProjectsAlertPoliciesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsAlertPoliciesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}