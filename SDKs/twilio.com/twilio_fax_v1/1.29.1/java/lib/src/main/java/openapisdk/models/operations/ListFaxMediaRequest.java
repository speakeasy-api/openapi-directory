package openapisdk.models.operations;



public class ListFaxMediaRequest {
    public String serverURL;
    public ListFaxMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFaxMediaPathParams pathParams;
    public ListFaxMediaRequest withPathParams(ListFaxMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFaxMediaQueryParams queryParams;
    public ListFaxMediaRequest withQueryParams(ListFaxMediaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFaxMediaSecurity security;
    public ListFaxMediaRequest withSecurity(ListFaxMediaSecurity security) {
        this.security = security;
        return this;
    }
}