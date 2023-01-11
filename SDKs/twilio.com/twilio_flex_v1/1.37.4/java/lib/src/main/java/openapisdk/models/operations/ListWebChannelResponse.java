package openapisdk.models.operations;



public class ListWebChannelResponse {
    public String contentType;
    public ListWebChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWebChannelListWebChannelResponse listWebChannelResponse;
    public ListWebChannelResponse withListWebChannelResponse(ListWebChannelListWebChannelResponse listWebChannelResponse) {
        this.listWebChannelResponse = listWebChannelResponse;
        return this;
    }
    public Long statusCode;
    public ListWebChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}