package openapisdk.models.operations;



public class GetCmsV3DomainsGetPageRequest {
    public GetCmsV3DomainsGetPageQueryParams queryParams;
    public GetCmsV3DomainsGetPageRequest withQueryParams(GetCmsV3DomainsGetPageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCmsV3DomainsGetPageSecurity security;
    public GetCmsV3DomainsGetPageRequest withSecurity(GetCmsV3DomainsGetPageSecurity security) {
        this.security = security;
        return this;
    }
}