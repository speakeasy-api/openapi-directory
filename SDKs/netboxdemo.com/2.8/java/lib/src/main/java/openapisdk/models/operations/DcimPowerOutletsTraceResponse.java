package openapisdk.models.operations;



public class DcimPowerOutletsTraceResponse {
    public String contentType;
    public DcimPowerOutletsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutlet powerOutlet;
    public DcimPowerOutletsTraceResponse withPowerOutlet(openapisdk.models.shared.PowerOutlet powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}