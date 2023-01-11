package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisListResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsApisListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApisResponse listApisResponse;
    public ApigeeregistryProjectsLocationsApisListResponse withListApisResponse(openapisdk.models.shared.ListApisResponse listApisResponse) {
        this.listApisResponse = listApisResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}