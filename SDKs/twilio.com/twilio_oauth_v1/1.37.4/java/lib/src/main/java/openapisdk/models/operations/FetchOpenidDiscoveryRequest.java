package openapisdk.models.operations;



public class FetchOpenidDiscoveryRequest {
    public String serverURL;
    public FetchOpenidDiscoveryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchOpenidDiscoverySecurity security;
    public FetchOpenidDiscoveryRequest withSecurity(FetchOpenidDiscoverySecurity security) {
        this.security = security;
        return this;
    }
}