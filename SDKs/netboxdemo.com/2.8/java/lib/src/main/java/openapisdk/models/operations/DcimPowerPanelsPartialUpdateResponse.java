package openapisdk.models.operations;



public class DcimPowerPanelsPartialUpdateResponse {
    public String contentType;
    public DcimPowerPanelsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPanel powerPanel;
    public DcimPowerPanelsPartialUpdateResponse withPowerPanel(openapisdk.models.shared.PowerPanel powerPanel) {
        this.powerPanel = powerPanel;
        return this;
    }
    public Long statusCode;
    public DcimPowerPanelsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}