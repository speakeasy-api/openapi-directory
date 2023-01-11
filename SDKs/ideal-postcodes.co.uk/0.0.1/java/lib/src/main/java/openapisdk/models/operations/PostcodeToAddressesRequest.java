package openapisdk.models.operations;



public class PostcodeToAddressesRequest {
    public PostcodeToAddressesPathParams pathParams;
    public PostcodeToAddressesRequest withPathParams(PostcodeToAddressesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostcodeToAddressesQueryParams queryParams;
    public PostcodeToAddressesRequest withQueryParams(PostcodeToAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostcodeToAddressesSecurity security;
    public PostcodeToAddressesRequest withSecurity(PostcodeToAddressesSecurity security) {
        this.security = security;
        return this;
    }
}