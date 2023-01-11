package openapisdk.models.operations;



public class DcimPowerOutletsUpdateResponse {
    public String contentType;
    public DcimPowerOutletsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerOutlet powerOutlet;
    public DcimPowerOutletsUpdateResponse withPowerOutlet(openapisdk.models.shared.PowerOutlet powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}