package openapisdk.models.operations;



public class PostCommandsResponse {
    public openapisdk.models.shared.Command command;
    public PostCommandsResponse withCommand(openapisdk.models.shared.Command command) {
        this.command = command;
        return this;
    }
    public String contentType;
    public PostCommandsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCommandsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}