package openapisdk.models.operations;



public class MonitoringProjectsAlertPoliciesListResponse {
    public String contentType;
    public MonitoringProjectsAlertPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAlertPoliciesResponse listAlertPoliciesResponse;
    public MonitoringProjectsAlertPoliciesListResponse withListAlertPoliciesResponse(openapisdk.models.shared.ListAlertPoliciesResponse listAlertPoliciesResponse) {
        this.listAlertPoliciesResponse = listAlertPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsAlertPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}