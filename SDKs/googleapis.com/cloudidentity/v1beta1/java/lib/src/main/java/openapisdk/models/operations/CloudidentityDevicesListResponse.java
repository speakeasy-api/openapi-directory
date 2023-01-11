package openapisdk.models.operations;



public class CloudidentityDevicesListResponse {
    public String contentType;
    public CloudidentityDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDevicesResponse listDevicesResponse;
    public CloudidentityDevicesListResponse withListDevicesResponse(openapisdk.models.shared.ListDevicesResponse listDevicesResponse) {
        this.listDevicesResponse = listDevicesResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}