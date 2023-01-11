package openapisdk.models.operations;



public class FirebasehostingSitesChannelsListResponse {
    public String contentType;
    public FirebasehostingSitesChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public FirebasehostingSitesChannelsListResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}