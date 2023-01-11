package openapisdk.models.operations;



public class ListDialingPermissionsHrsPrefixesRequest {
    public String serverURL;
    public ListDialingPermissionsHrsPrefixesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDialingPermissionsHrsPrefixesPathParams pathParams;
    public ListDialingPermissionsHrsPrefixesRequest withPathParams(ListDialingPermissionsHrsPrefixesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDialingPermissionsHrsPrefixesQueryParams queryParams;
    public ListDialingPermissionsHrsPrefixesRequest withQueryParams(ListDialingPermissionsHrsPrefixesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDialingPermissionsHrsPrefixesSecurity security;
    public ListDialingPermissionsHrsPrefixesRequest withSecurity(ListDialingPermissionsHrsPrefixesSecurity security) {
        this.security = security;
        return this;
    }
}