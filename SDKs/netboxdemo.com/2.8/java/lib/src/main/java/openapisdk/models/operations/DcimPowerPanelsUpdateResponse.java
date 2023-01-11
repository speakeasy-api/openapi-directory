package openapisdk.models.operations;



public class DcimPowerPanelsUpdateResponse {
    public String contentType;
    public DcimPowerPanelsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPanel powerPanel;
    public DcimPowerPanelsUpdateResponse withPowerPanel(openapisdk.models.shared.PowerPanel powerPanel) {
        this.powerPanel = powerPanel;
        return this;
    }
    public Long statusCode;
    public DcimPowerPanelsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}