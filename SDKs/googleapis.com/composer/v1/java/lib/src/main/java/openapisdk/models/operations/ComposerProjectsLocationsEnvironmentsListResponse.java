package openapisdk.models.operations;



public class ComposerProjectsLocationsEnvironmentsListResponse {
    public String contentType;
    public ComposerProjectsLocationsEnvironmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse;
    public ComposerProjectsLocationsEnvironmentsListResponse withListEnvironmentsResponse(openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse) {
        this.listEnvironmentsResponse = listEnvironmentsResponse;
        return this;
    }
    public Long statusCode;
    public ComposerProjectsLocationsEnvironmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}