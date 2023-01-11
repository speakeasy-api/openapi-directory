package openapisdk.models.operations;



public class PostV05LinksLinkConfirmRequest {
    public String serverURL;
    public PostV05LinksLinkConfirmRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05LinksLinkConfirmHeaders headers;
    public PostV05LinksLinkConfirmRequest withHeaders(PostV05LinksLinkConfirmHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05LinksLinkConfirmRequests request;
    public PostV05LinksLinkConfirmRequest withRequest(PostV05LinksLinkConfirmRequests request) {
        this.request = request;
        return this;
    }
}