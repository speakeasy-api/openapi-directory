package openapisdk.models.operations;



public class ListIpCommandResponse {
    public String contentType;
    public ListIpCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListIpCommandListIpCommandResponse listIpCommandResponse;
    public ListIpCommandResponse withListIpCommandResponse(ListIpCommandListIpCommandResponse listIpCommandResponse) {
        this.listIpCommandResponse = listIpCommandResponse;
        return this;
    }
    public Long statusCode;
    public ListIpCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}