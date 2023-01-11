package openapisdk.models.operations;



public class IntentMultipartRequest {
    public IntentMultipartRequests request;
    public IntentMultipartRequest withRequest(IntentMultipartRequests request) {
        this.request = request;
        return this;
    }
    public IntentMultipartSecurity security;
    public IntentMultipartRequest withSecurity(IntentMultipartSecurity security) {
        this.security = security;
        return this;
    }
}