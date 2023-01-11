package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsGatewaysListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsGatewaysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGatewaysResponse listGatewaysResponse;
    public NetworkservicesProjectsLocationsGatewaysListResponse withListGatewaysResponse(openapisdk.models.shared.ListGatewaysResponse listGatewaysResponse) {
        this.listGatewaysResponse = listGatewaysResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsGatewaysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}