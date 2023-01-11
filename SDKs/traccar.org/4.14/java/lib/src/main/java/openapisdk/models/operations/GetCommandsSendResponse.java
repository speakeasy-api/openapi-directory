package openapisdk.models.operations;



public class GetCommandsSendResponse {
    public openapisdk.models.shared.Command[] commands;
    public GetCommandsSendResponse withCommands(openapisdk.models.shared.Command[] commands) {
        this.commands = commands;
        return this;
    }
    public String contentType;
    public GetCommandsSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommandsSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}