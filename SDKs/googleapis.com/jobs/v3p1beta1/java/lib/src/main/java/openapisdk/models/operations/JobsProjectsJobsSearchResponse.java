package openapisdk.models.operations;



public class JobsProjectsJobsSearchResponse {
    public String contentType;
    public JobsProjectsJobsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchJobsResponse searchJobsResponse;
    public JobsProjectsJobsSearchResponse withSearchJobsResponse(openapisdk.models.shared.SearchJobsResponse searchJobsResponse) {
        this.searchJobsResponse = searchJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}