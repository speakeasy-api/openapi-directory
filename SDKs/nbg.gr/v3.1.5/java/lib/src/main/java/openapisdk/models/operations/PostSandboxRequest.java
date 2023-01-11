package openapisdk.models.operations;



public class PostSandboxRequest {
    public PostSandboxRequests request;
    public PostSandboxRequest withRequest(PostSandboxRequests request) {
        this.request = request;
        return this;
    }
    public PostSandboxSecurity security;
    public PostSandboxRequest withSecurity(PostSandboxSecurity security) {
        this.security = security;
        return this;
    }
}