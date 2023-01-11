package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsGrpcRoutesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsGrpcRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGrpcRoutesResponse listGrpcRoutesResponse;
    public NetworkservicesProjectsLocationsGrpcRoutesListResponse withListGrpcRoutesResponse(openapisdk.models.shared.ListGrpcRoutesResponse listGrpcRoutesResponse) {
        this.listGrpcRoutesResponse = listGrpcRoutesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsGrpcRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}