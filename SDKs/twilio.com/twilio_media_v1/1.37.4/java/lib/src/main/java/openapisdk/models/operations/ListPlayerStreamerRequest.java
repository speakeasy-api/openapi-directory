package openapisdk.models.operations;



public class ListPlayerStreamerRequest {
    public String serverURL;
    public ListPlayerStreamerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListPlayerStreamerQueryParams queryParams;
    public ListPlayerStreamerRequest withQueryParams(ListPlayerStreamerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPlayerStreamerSecurity security;
    public ListPlayerStreamerRequest withSecurity(ListPlayerStreamerSecurity security) {
        this.security = security;
        return this;
    }
}