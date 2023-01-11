package openapisdk.models.operations;



public class FetchCertsRequest {
    public String serverURL;
    public FetchCertsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCertsSecurity security;
    public FetchCertsRequest withSecurity(FetchCertsSecurity security) {
        this.security = security;
        return this;
    }
}