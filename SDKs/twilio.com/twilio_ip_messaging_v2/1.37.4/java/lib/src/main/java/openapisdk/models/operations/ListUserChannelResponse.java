package openapisdk.models.operations;



public class ListUserChannelResponse {
    public String contentType;
    public ListUserChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUserChannelListUserChannelResponse listUserChannelResponse;
    public ListUserChannelResponse withListUserChannelResponse(ListUserChannelListUserChannelResponse listUserChannelResponse) {
        this.listUserChannelResponse = listUserChannelResponse;
        return this;
    }
    public Long statusCode;
    public ListUserChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}