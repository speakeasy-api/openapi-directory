package openapisdk.models.operations;



public class PostV05UsersAuthOnConfirmRequest {
    public String serverURL;
    public PostV05UsersAuthOnConfirmRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05UsersAuthOnConfirmHeaders headers;
    public PostV05UsersAuthOnConfirmRequest withHeaders(PostV05UsersAuthOnConfirmHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05UsersAuthOnConfirmRequests request;
    public PostV05UsersAuthOnConfirmRequest withRequest(PostV05UsersAuthOnConfirmRequests request) {
        this.request = request;
        return this;
    }
}