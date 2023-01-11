package openapisdk.models.operations;



public class WorkloadmanagerProjectsLocationsEvaluationsListResponse {
    public String contentType;
    public WorkloadmanagerProjectsLocationsEvaluationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEvaluationsResponse listEvaluationsResponse;
    public WorkloadmanagerProjectsLocationsEvaluationsListResponse withListEvaluationsResponse(openapisdk.models.shared.ListEvaluationsResponse listEvaluationsResponse) {
        this.listEvaluationsResponse = listEvaluationsResponse;
        return this;
    }
    public Long statusCode;
    public WorkloadmanagerProjectsLocationsEvaluationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}