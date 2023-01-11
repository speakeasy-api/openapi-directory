package openapisdk.models.operations;



public class PutCommandsIdResponse {
    public openapisdk.models.shared.Command command;
    public PutCommandsIdResponse withCommand(openapisdk.models.shared.Command command) {
        this.command = command;
        return this;
    }
    public String contentType;
    public PutCommandsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutCommandsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}