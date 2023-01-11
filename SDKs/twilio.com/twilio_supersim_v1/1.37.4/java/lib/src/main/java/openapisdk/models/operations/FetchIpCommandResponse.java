package openapisdk.models.operations;



public class FetchIpCommandResponse {
    public String contentType;
    public FetchIpCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchIpCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1IpCommand supersimV1IpCommand;
    public FetchIpCommandResponse withSupersimV1IpCommand(openapisdk.models.shared.SupersimV1IpCommand supersimV1IpCommand) {
        this.supersimV1IpCommand = supersimV1IpCommand;
        return this;
    }
}