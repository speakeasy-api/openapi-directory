package openapisdk.models.operations;



public class GetCommandsResponse {
    public openapisdk.models.shared.Command[] commands;
    public GetCommandsResponse withCommands(openapisdk.models.shared.Command[] commands) {
        this.commands = commands;
        return this;
    }
    public String contentType;
    public GetCommandsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommandsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}