package openapisdk.models.operations;



public class UpdateDeviceResponse {
    public String contentType;
    public UpdateDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MicrovisorV1Device microvisorV1Device;
    public UpdateDeviceResponse withMicrovisorV1Device(openapisdk.models.shared.MicrovisorV1Device microvisorV1Device) {
        this.microvisorV1Device = microvisorV1Device;
        return this;
    }
}