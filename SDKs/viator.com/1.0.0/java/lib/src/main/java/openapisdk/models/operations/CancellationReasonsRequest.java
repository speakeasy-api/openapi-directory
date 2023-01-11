package openapisdk.models.operations;



public class CancellationReasonsRequest {
    public String serverURL;
    public CancellationReasonsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CancellationReasonsHeaders headers;
    public CancellationReasonsRequest withHeaders(CancellationReasonsHeaders headers) {
        this.headers = headers;
        return this;
    }
}