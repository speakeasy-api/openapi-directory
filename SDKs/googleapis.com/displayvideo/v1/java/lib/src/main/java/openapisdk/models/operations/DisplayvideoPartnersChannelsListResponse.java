package openapisdk.models.operations;



public class DisplayvideoPartnersChannelsListResponse {
    public String contentType;
    public DisplayvideoPartnersChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public DisplayvideoPartnersChannelsListResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}