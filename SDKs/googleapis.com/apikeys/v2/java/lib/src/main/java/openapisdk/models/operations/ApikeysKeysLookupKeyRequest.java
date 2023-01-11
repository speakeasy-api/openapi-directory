package openapisdk.models.operations;



public class ApikeysKeysLookupKeyRequest {
    public ApikeysKeysLookupKeyQueryParams queryParams;
    public ApikeysKeysLookupKeyRequest withQueryParams(ApikeysKeysLookupKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApikeysKeysLookupKeySecurity security;
    public ApikeysKeysLookupKeyRequest withSecurity(ApikeysKeysLookupKeySecurity security) {
        this.security = security;
        return this;
    }
}