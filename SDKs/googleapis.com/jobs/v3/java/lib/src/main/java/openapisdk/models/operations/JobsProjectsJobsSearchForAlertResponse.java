package openapisdk.models.operations;



public class JobsProjectsJobsSearchForAlertResponse {
    public String contentType;
    public JobsProjectsJobsSearchForAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchJobsResponse searchJobsResponse;
    public JobsProjectsJobsSearchForAlertResponse withSearchJobsResponse(openapisdk.models.shared.SearchJobsResponse searchJobsResponse) {
        this.searchJobsResponse = searchJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsSearchForAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}