package openapisdk.models.operations;



public class FetchDeviceResponse {
    public String contentType;
    public FetchDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MicrovisorV1Device microvisorV1Device;
    public FetchDeviceResponse withMicrovisorV1Device(openapisdk.models.shared.MicrovisorV1Device microvisorV1Device) {
        this.microvisorV1Device = microvisorV1Device;
        return this;
    }
}