package openapisdk.models.operations;



public class CreateCommandResponse {
    public String contentType;
    public CreateCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1Command wirelessV1Command;
    public CreateCommandResponse withWirelessV1Command(openapisdk.models.shared.WirelessV1Command wirelessV1Command) {
        this.wirelessV1Command = wirelessV1Command;
        return this;
    }
}