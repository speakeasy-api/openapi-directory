package openapisdk.models.operations;



public class FetchWirelessSimResponse {
    public String contentType;
    public FetchWirelessSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWirelessSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessSim previewWirelessSim;
    public FetchWirelessSimResponse withPreviewWirelessSim(openapisdk.models.shared.PreviewWirelessSim previewWirelessSim) {
        this.previewWirelessSim = previewWirelessSim;
        return this;
    }
}