package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ManufacturersAccountsProductsUpdateRequest {
    public ManufacturersAccountsProductsUpdatePathParams pathParams;
    public ManufacturersAccountsProductsUpdateRequest withPathParams(ManufacturersAccountsProductsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ManufacturersAccountsProductsUpdateQueryParams queryParams;
    public ManufacturersAccountsProductsUpdateRequest withQueryParams(ManufacturersAccountsProductsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Attributes request;
    public ManufacturersAccountsProductsUpdateRequest withRequest(openapisdk.models.shared.Attributes request) {
        this.request = request;
        return this;
    }
    public ManufacturersAccountsProductsUpdateSecurity security;
    public ManufacturersAccountsProductsUpdateRequest withSecurity(ManufacturersAccountsProductsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}