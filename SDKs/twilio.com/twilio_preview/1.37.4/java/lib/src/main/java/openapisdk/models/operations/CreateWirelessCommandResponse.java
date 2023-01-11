package openapisdk.models.operations;



public class CreateWirelessCommandResponse {
    public String contentType;
    public CreateWirelessCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWirelessCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessCommand previewWirelessCommand;
    public CreateWirelessCommandResponse withPreviewWirelessCommand(openapisdk.models.shared.PreviewWirelessCommand previewWirelessCommand) {
        this.previewWirelessCommand = previewWirelessCommand;
        return this;
    }
}