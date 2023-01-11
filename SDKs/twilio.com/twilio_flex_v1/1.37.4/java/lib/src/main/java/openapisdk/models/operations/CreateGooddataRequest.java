package openapisdk.models.operations;



public class CreateGooddataRequest {
    public String serverURL;
    public CreateGooddataRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateGooddataHeaders headers;
    public CreateGooddataRequest withHeaders(CreateGooddataHeaders headers) {
        this.headers = headers;
        return this;
    }
    public CreateGooddataSecurity security;
    public CreateGooddataRequest withSecurity(CreateGooddataSecurity security) {
        this.security = security;
        return this;
    }
}