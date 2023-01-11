package openapisdk.models.operations;



public class PostV05CareContextsDiscoverRequest {
    public String serverURL;
    public PostV05CareContextsDiscoverRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05CareContextsDiscoverHeaders headers;
    public PostV05CareContextsDiscoverRequest withHeaders(PostV05CareContextsDiscoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05CareContextsDiscoverRequests request;
    public PostV05CareContextsDiscoverRequest withRequest(PostV05CareContextsDiscoverRequests request) {
        this.request = request;
        return this;
    }
}