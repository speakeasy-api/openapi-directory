package openapisdk.models.operations;



public class AddressSearchRequest {
    public AddressSearchQueryParams queryParams;
    public AddressSearchRequest withQueryParams(AddressSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddressSearchSecurity security;
    public AddressSearchRequest withSecurity(AddressSearchSecurity security) {
        this.security = security;
        return this;
    }
}