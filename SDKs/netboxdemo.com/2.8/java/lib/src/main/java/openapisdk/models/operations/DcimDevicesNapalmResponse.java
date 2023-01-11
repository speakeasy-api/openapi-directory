package openapisdk.models.operations;



public class DcimDevicesNapalmResponse {
    public String contentType;
    public DcimDevicesNapalmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceNapalm deviceNAPALM;
    public DcimDevicesNapalmResponse withDeviceNapalm(openapisdk.models.shared.DeviceNapalm deviceNAPALM) {
        this.deviceNAPALM = deviceNAPALM;
        return this;
    }
    public Long statusCode;
    public DcimDevicesNapalmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}