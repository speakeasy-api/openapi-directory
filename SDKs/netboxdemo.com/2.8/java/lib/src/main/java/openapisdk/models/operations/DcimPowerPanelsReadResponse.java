package openapisdk.models.operations;



public class DcimPowerPanelsReadResponse {
    public String contentType;
    public DcimPowerPanelsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPanel powerPanel;
    public DcimPowerPanelsReadResponse withPowerPanel(openapisdk.models.shared.PowerPanel powerPanel) {
        this.powerPanel = powerPanel;
        return this;
    }
    public Long statusCode;
    public DcimPowerPanelsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}