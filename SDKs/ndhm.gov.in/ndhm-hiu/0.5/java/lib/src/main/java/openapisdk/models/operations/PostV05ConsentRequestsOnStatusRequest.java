package openapisdk.models.operations;



public class PostV05ConsentRequestsOnStatusRequest {
    public String serverURL;
    public PostV05ConsentRequestsOnStatusRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05ConsentRequestsOnStatusHeaders headers;
    public PostV05ConsentRequestsOnStatusRequest withHeaders(PostV05ConsentRequestsOnStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05ConsentRequestsOnStatusRequests request;
    public PostV05ConsentRequestsOnStatusRequest withRequest(PostV05ConsentRequestsOnStatusRequests request) {
        this.request = request;
        return this;
    }
}