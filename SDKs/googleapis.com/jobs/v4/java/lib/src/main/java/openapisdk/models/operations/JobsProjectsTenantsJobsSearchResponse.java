package openapisdk.models.operations;



public class JobsProjectsTenantsJobsSearchResponse {
    public String contentType;
    public JobsProjectsTenantsJobsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchJobsResponse searchJobsResponse;
    public JobsProjectsTenantsJobsSearchResponse withSearchJobsResponse(openapisdk.models.shared.SearchJobsResponse searchJobsResponse) {
        this.searchJobsResponse = searchJobsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}