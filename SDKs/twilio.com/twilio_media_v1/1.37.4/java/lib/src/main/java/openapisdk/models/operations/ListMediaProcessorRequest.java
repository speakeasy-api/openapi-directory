package openapisdk.models.operations;



public class ListMediaProcessorRequest {
    public String serverURL;
    public ListMediaProcessorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMediaProcessorQueryParams queryParams;
    public ListMediaProcessorRequest withQueryParams(ListMediaProcessorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMediaProcessorSecurity security;
    public ListMediaProcessorRequest withSecurity(ListMediaProcessorSecurity security) {
        this.security = security;
        return this;
    }
}