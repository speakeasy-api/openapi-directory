package openapisdk.models.operations;



public class NotebooksProjectsLocationsEnvironmentsListResponse {
    public String contentType;
    public NotebooksProjectsLocationsEnvironmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse;
    public NotebooksProjectsLocationsEnvironmentsListResponse withListEnvironmentsResponse(openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse) {
        this.listEnvironmentsResponse = listEnvironmentsResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsEnvironmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}