package openapisdk.models.operations;



public class PostAccountAccessConsentsRequest {
    public PostAccountAccessConsentsHeaders headers;
    public PostAccountAccessConsentsRequest withHeaders(PostAccountAccessConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostAccountAccessConsentsRequests request;
    public PostAccountAccessConsentsRequest withRequest(PostAccountAccessConsentsRequests request) {
        this.request = request;
        return this;
    }
    public PostAccountAccessConsentsSecurity security;
    public PostAccountAccessConsentsRequest withSecurity(PostAccountAccessConsentsSecurity security) {
        this.security = security;
        return this;
    }
}