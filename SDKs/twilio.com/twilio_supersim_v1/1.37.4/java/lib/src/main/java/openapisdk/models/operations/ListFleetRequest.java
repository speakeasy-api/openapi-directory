package openapisdk.models.operations;



public class ListFleetRequest {
    public String serverURL;
    public ListFleetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFleetQueryParams queryParams;
    public ListFleetRequest withQueryParams(ListFleetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFleetSecurity security;
    public ListFleetRequest withSecurity(ListFleetSecurity security) {
        this.security = security;
        return this;
    }
}