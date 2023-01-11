package openapisdk.models.operations;



public class JobsProjectsTenantsJobsSearchForAlertResponse {
    public String contentType;
    public JobsProjectsTenantsJobsSearchForAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchJobsResponse searchJobsResponse;
    public JobsProjectsTenantsJobsSearchForAlertResponse withSearchJobsResponse(openapisdk.models.shared.SearchJobsResponse searchJobsResponse) {
        this.searchJobsResponse = searchJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsSearchForAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}