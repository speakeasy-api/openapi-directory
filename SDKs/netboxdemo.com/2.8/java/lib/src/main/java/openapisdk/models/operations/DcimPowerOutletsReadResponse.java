package openapisdk.models.operations;



public class DcimPowerOutletsReadResponse {
    public String contentType;
    public DcimPowerOutletsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutlet powerOutlet;
    public DcimPowerOutletsReadResponse withPowerOutlet(openapisdk.models.shared.PowerOutlet powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}