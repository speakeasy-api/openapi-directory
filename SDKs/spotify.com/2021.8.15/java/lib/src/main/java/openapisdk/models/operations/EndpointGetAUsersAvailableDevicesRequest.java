package openapisdk.models.operations;



public class EndpointGetAUsersAvailableDevicesRequest {
    public EndpointGetAUsersAvailableDevicesHeaders headers;
    public EndpointGetAUsersAvailableDevicesRequest withHeaders(EndpointGetAUsersAvailableDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAUsersAvailableDevicesSecurity security;
    public EndpointGetAUsersAvailableDevicesRequest withSecurity(EndpointGetAUsersAvailableDevicesSecurity security) {
        this.security = security;
        return this;
    }
}