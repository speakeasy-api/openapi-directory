package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsListResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListKeyRingsResponse listKeyRingsResponse;
    public CloudkmsProjectsLocationsKeyRingsListResponse withListKeyRingsResponse(openapisdk.models.shared.ListKeyRingsResponse listKeyRingsResponse) {
        this.listKeyRingsResponse = listKeyRingsResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}