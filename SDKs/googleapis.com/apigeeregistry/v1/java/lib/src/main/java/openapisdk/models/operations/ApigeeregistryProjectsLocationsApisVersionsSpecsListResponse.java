package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApiSpecsResponse listApiSpecsResponse;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse withListApiSpecsResponse(openapisdk.models.shared.ListApiSpecsResponse listApiSpecsResponse) {
        this.listApiSpecsResponse = listApiSpecsResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}