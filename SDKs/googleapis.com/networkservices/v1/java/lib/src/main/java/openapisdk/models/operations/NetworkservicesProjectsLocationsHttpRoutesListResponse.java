package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsHttpRoutesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsHttpRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHttpRoutesResponse listHttpRoutesResponse;
    public NetworkservicesProjectsLocationsHttpRoutesListResponse withListHttpRoutesResponse(openapisdk.models.shared.ListHttpRoutesResponse listHttpRoutesResponse) {
        this.listHttpRoutesResponse = listHttpRoutesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsHttpRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}