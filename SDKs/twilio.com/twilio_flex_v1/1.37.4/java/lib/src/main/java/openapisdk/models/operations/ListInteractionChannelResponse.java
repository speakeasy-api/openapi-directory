package openapisdk.models.operations;



public class ListInteractionChannelResponse {
    public String contentType;
    public ListInteractionChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListInteractionChannelListInteractionChannelResponse listInteractionChannelResponse;
    public ListInteractionChannelResponse withListInteractionChannelResponse(ListInteractionChannelListInteractionChannelResponse listInteractionChannelResponse) {
        this.listInteractionChannelResponse = listInteractionChannelResponse;
        return this;
    }
    public Long statusCode;
    public ListInteractionChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}