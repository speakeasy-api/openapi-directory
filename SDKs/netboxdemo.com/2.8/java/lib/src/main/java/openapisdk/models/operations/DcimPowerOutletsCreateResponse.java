package openapisdk.models.operations;



public class DcimPowerOutletsCreateResponse {
    public String contentType;
    public DcimPowerOutletsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutlet powerOutlet;
    public DcimPowerOutletsCreateResponse withPowerOutlet(openapisdk.models.shared.PowerOutlet powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}