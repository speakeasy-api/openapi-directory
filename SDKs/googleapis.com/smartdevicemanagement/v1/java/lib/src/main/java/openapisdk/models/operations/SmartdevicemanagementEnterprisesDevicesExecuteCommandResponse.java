package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse {
    public String contentType;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse withGoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse) {
        this.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse;
        return this;
    }
    public Long statusCode;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}