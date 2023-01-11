package openapisdk.models.operations;



public class PostV05ConsentRequestsOnInitRequest {
    public String serverURL;
    public PostV05ConsentRequestsOnInitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05ConsentRequestsOnInitHeaders headers;
    public PostV05ConsentRequestsOnInitRequest withHeaders(PostV05ConsentRequestsOnInitHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05ConsentRequestsOnInitRequests request;
    public PostV05ConsentRequestsOnInitRequest withRequest(PostV05ConsentRequestsOnInitRequests request) {
        this.request = request;
        return this;
    }
}