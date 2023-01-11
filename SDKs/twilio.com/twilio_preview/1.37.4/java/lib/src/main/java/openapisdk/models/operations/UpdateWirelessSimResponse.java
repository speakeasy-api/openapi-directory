package openapisdk.models.operations;



public class UpdateWirelessSimResponse {
    public String contentType;
    public UpdateWirelessSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWirelessSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessSim previewWirelessSim;
    public UpdateWirelessSimResponse withPreviewWirelessSim(openapisdk.models.shared.PreviewWirelessSim previewWirelessSim) {
        this.previewWirelessSim = previewWirelessSim;
        return this;
    }
}