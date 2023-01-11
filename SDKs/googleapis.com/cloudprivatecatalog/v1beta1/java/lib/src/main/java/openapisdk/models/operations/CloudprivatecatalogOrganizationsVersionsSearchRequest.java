package openapisdk.models.operations;



public class CloudprivatecatalogOrganizationsVersionsSearchRequest {
    public CloudprivatecatalogOrganizationsVersionsSearchPathParams pathParams;
    public CloudprivatecatalogOrganizationsVersionsSearchRequest withPathParams(CloudprivatecatalogOrganizationsVersionsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogOrganizationsVersionsSearchQueryParams queryParams;
    public CloudprivatecatalogOrganizationsVersionsSearchRequest withQueryParams(CloudprivatecatalogOrganizationsVersionsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudprivatecatalogOrganizationsVersionsSearchSecurity security;
    public CloudprivatecatalogOrganizationsVersionsSearchRequest withSecurity(CloudprivatecatalogOrganizationsVersionsSearchSecurity security) {
        this.security = security;
        return this;
    }
}