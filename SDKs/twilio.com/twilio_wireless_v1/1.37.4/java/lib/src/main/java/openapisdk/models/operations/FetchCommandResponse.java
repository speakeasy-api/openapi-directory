package openapisdk.models.operations;



public class FetchCommandResponse {
    public String contentType;
    public FetchCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1Command wirelessV1Command;
    public FetchCommandResponse withWirelessV1Command(openapisdk.models.shared.WirelessV1Command wirelessV1Command) {
        this.wirelessV1Command = wirelessV1Command;
        return this;
    }
}