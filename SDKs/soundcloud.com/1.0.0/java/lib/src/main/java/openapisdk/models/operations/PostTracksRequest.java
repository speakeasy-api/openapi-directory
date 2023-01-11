package openapisdk.models.operations;



public class PostTracksRequest {
    public PostTracksRequests request;
    public PostTracksRequest withRequest(PostTracksRequests request) {
        this.request = request;
        return this;
    }
    public PostTracksSecurity security;
    public PostTracksRequest withSecurity(PostTracksSecurity security) {
        this.security = security;
        return this;
    }
}