package openapisdk.models.operations;



public class ListPlatformsRequest {
    public ListPlatformsQueryParams queryParams;
    public ListPlatformsRequest withQueryParams(ListPlatformsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPlatformsSecurity security;
    public ListPlatformsRequest withSecurity(ListPlatformsSecurity security) {
        this.security = security;
        return this;
    }
}