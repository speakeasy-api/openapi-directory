package openapisdk.models.operations;



public class PutSandboxRequest {
    public PutSandboxRequests request;
    public PutSandboxRequest withRequest(PutSandboxRequests request) {
        this.request = request;
        return this;
    }
    public PutSandboxSecurity security;
    public PutSandboxRequest withSecurity(PutSandboxSecurity security) {
        this.security = security;
        return this;
    }
}