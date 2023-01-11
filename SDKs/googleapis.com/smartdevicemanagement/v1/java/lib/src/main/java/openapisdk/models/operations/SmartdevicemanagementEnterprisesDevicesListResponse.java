package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesDevicesListResponse {
    public String contentType;
    public SmartdevicemanagementEnterprisesDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse googleHomeEnterpriseSdmV1ListDevicesResponse;
    public SmartdevicemanagementEnterprisesDevicesListResponse withGoogleHomeEnterpriseSdmV1ListDevicesResponse(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse googleHomeEnterpriseSdmV1ListDevicesResponse) {
        this.googleHomeEnterpriseSdmV1ListDevicesResponse = googleHomeEnterpriseSdmV1ListDevicesResponse;
        return this;
    }
    public Long statusCode;
    public SmartdevicemanagementEnterprisesDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}