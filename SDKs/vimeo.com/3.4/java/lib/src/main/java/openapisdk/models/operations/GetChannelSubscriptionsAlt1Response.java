package openapisdk.models.operations;



public class GetChannelSubscriptionsAlt1Response {
    public String contentType;
    public GetChannelSubscriptionsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelSubscriptionsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel[] channels;
    public GetChannelSubscriptionsAlt1Response withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
}