package openapisdk.models.operations;



public class DisplayvideoAdvertisersChannelsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public DisplayvideoAdvertisersChannelsListResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}