package openapisdk.models.operations;



public class PostCommandsSendResponse {
    public openapisdk.models.shared.Command command;
    public PostCommandsSendResponse withCommand(openapisdk.models.shared.Command command) {
        this.command = command;
        return this;
    }
    public String contentType;
    public PostCommandsSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCommandsSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}