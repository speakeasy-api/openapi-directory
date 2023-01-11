package openapisdk.models.operations;



public class ListSipAuthRegistrationsCredentialListMappingRequest {
    public String serverURL;
    public ListSipAuthRegistrationsCredentialListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSipAuthRegistrationsCredentialListMappingPathParams pathParams;
    public ListSipAuthRegistrationsCredentialListMappingRequest withPathParams(ListSipAuthRegistrationsCredentialListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSipAuthRegistrationsCredentialListMappingQueryParams queryParams;
    public ListSipAuthRegistrationsCredentialListMappingRequest withQueryParams(ListSipAuthRegistrationsCredentialListMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSipAuthRegistrationsCredentialListMappingSecurity security;
    public ListSipAuthRegistrationsCredentialListMappingRequest withSecurity(ListSipAuthRegistrationsCredentialListMappingSecurity security) {
        this.security = security;
        return this;
    }
}