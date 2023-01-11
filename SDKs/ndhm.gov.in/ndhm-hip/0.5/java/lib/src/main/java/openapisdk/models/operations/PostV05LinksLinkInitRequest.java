package openapisdk.models.operations;



public class PostV05LinksLinkInitRequest {
    public String serverURL;
    public PostV05LinksLinkInitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05LinksLinkInitHeaders headers;
    public PostV05LinksLinkInitRequest withHeaders(PostV05LinksLinkInitHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05LinksLinkInitRequests request;
    public PostV05LinksLinkInitRequest withRequest(PostV05LinksLinkInitRequests request) {
        this.request = request;
        return this;
    }
}