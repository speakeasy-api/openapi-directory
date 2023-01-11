package openapisdk.models.operations;



public class DcimPowerOutletsPartialUpdateResponse {
    public String contentType;
    public DcimPowerOutletsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutlet powerOutlet;
    public DcimPowerOutletsPartialUpdateResponse withPowerOutlet(openapisdk.models.shared.PowerOutlet powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}