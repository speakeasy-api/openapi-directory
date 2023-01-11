package openapisdk.models.operations;



public class RunProjectsLocationsRevisionsListResponse {
    public String contentType;
    public RunProjectsLocationsRevisionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRevisionsResponse listRevisionsResponse;
    public RunProjectsLocationsRevisionsListResponse withListRevisionsResponse(openapisdk.models.shared.ListRevisionsResponse listRevisionsResponse) {
        this.listRevisionsResponse = listRevisionsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsRevisionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}