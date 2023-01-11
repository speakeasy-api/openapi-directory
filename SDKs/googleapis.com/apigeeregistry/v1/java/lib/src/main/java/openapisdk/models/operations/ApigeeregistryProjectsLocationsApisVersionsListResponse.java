package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisVersionsListResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsApisVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApiVersionsResponse listApiVersionsResponse;
    public ApigeeregistryProjectsLocationsApisVersionsListResponse withListApiVersionsResponse(openapisdk.models.shared.ListApiVersionsResponse listApiVersionsResponse) {
        this.listApiVersionsResponse = listApiVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}