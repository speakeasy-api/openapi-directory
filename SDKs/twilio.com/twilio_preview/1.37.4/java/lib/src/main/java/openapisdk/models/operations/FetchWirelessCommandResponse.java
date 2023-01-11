package openapisdk.models.operations;



public class FetchWirelessCommandResponse {
    public String contentType;
    public FetchWirelessCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWirelessCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessCommand previewWirelessCommand;
    public FetchWirelessCommandResponse withPreviewWirelessCommand(openapisdk.models.shared.PreviewWirelessCommand previewWirelessCommand) {
        this.previewWirelessCommand = previewWirelessCommand;
        return this;
    }
}