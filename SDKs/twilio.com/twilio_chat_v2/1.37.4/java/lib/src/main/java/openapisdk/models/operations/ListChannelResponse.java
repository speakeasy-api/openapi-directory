package openapisdk.models.operations;



public class ListChannelResponse {
    public String contentType;
    public ListChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListChannelListChannelResponse listChannelResponse;
    public ListChannelResponse withListChannelResponse(ListChannelListChannelResponse listChannelResponse) {
        this.listChannelResponse = listChannelResponse;
        return this;
    }
    public Long statusCode;
    public ListChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}