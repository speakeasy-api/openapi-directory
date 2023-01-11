package openapisdk.models.operations;



public class CreateIpCommandResponse {
    public String contentType;
    public CreateIpCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIpCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1IpCommand supersimV1IpCommand;
    public CreateIpCommandResponse withSupersimV1IpCommand(openapisdk.models.shared.SupersimV1IpCommand supersimV1IpCommand) {
        this.supersimV1IpCommand = supersimV1IpCommand;
        return this;
    }
}