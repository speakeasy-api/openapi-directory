package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersLookupResponse {
    public String contentType;
    public CloudidentityDevicesDeviceUsersLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LookupSelfDeviceUsersResponse lookupSelfDeviceUsersResponse;
    public CloudidentityDevicesDeviceUsersLookupResponse withLookupSelfDeviceUsersResponse(openapisdk.models.shared.LookupSelfDeviceUsersResponse lookupSelfDeviceUsersResponse) {
        this.lookupSelfDeviceUsersResponse = lookupSelfDeviceUsersResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesDeviceUsersLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}