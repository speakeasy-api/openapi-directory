package openapisdk.models.operations;



public class AddressAutocompleteRequest {
    public AddressAutocompleteQueryParams queryParams;
    public AddressAutocompleteRequest withQueryParams(AddressAutocompleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddressAutocompleteSecurity security;
    public AddressAutocompleteRequest withSecurity(AddressAutocompleteSecurity security) {
        this.security = security;
        return this;
    }
}