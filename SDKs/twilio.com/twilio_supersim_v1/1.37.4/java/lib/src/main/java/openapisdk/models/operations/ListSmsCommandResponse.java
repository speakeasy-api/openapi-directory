package openapisdk.models.operations;



public class ListSmsCommandResponse {
    public String contentType;
    public ListSmsCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSmsCommandListSmsCommandResponse listSmsCommandResponse;
    public ListSmsCommandResponse withListSmsCommandResponse(ListSmsCommandListSmsCommandResponse listSmsCommandResponse) {
        this.listSmsCommandResponse = listSmsCommandResponse;
        return this;
    }
    public Long statusCode;
    public ListSmsCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}