package openapisdk.models.operations;



public class DcimPowerPanelsCreateResponse {
    public String contentType;
    public DcimPowerPanelsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPanel powerPanel;
    public DcimPowerPanelsCreateResponse withPowerPanel(openapisdk.models.shared.PowerPanel powerPanel) {
        this.powerPanel = powerPanel;
        return this;
    }
    public Long statusCode;
    public DcimPowerPanelsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}