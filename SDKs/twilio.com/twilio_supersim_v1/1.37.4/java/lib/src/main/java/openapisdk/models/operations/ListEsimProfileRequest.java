package openapisdk.models.operations;



public class ListEsimProfileRequest {
    public String serverURL;
    public ListEsimProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEsimProfileQueryParams queryParams;
    public ListEsimProfileRequest withQueryParams(ListEsimProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEsimProfileSecurity security;
    public ListEsimProfileRequest withSecurity(ListEsimProfileSecurity security) {
        this.security = security;
        return this;
    }
}