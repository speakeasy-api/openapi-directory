package openapisdk.models.operations;



public class EndpointGetAUsersAvailableDevicesResponse {
    public String contentType;
    public EndpointGetAUsersAvailableDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DevicesObject devicesObject;
    public EndpointGetAUsersAvailableDevicesResponse withDevicesObject(openapisdk.models.shared.DevicesObject devicesObject) {
        this.devicesObject = devicesObject;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAUsersAvailableDevicesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAUsersAvailableDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}