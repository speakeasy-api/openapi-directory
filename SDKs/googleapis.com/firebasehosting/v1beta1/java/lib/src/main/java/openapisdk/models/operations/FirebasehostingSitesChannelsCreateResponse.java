package openapisdk.models.operations;



public class FirebasehostingSitesChannelsCreateResponse {
    public openapisdk.models.shared.Channel channel;
    public FirebasehostingSitesChannelsCreateResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public FirebasehostingSitesChannelsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesChannelsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}