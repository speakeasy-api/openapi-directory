package openapisdk.models.operations;



public class ListCommandResponse {
    public String contentType;
    public ListCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCommandListCommandResponse listCommandResponse;
    public ListCommandResponse withListCommandResponse(ListCommandListCommandResponse listCommandResponse) {
        this.listCommandResponse = listCommandResponse;
        return this;
    }
    public Long statusCode;
    public ListCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}