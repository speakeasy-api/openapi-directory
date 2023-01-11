package openapisdk.models.operations;



public class PostV05UsersAuthOnInitRequest {
    public String serverURL;
    public PostV05UsersAuthOnInitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05UsersAuthOnInitHeaders headers;
    public PostV05UsersAuthOnInitRequest withHeaders(PostV05UsersAuthOnInitHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05UsersAuthOnInitRequests request;
    public PostV05UsersAuthOnInitRequest withRequest(PostV05UsersAuthOnInitRequests request) {
        this.request = request;
        return this;
    }
}