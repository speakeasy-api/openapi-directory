package openapisdk.models.operations;



public class RunProjectsLocationsRoutesListResponse {
    public String contentType;
    public RunProjectsLocationsRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRoutesResponse listRoutesResponse;
    public RunProjectsLocationsRoutesListResponse withListRoutesResponse(openapisdk.models.shared.ListRoutesResponse listRoutesResponse) {
        this.listRoutesResponse = listRoutesResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}