package openapisdk.models.operations;



public class GetKeysRequest {
    public GetKeysQueryParams queryParams;
    public GetKeysRequest withQueryParams(GetKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetKeysSecurity security;
    public GetKeysRequest withSecurity(GetKeysSecurity security) {
        this.security = security;
        return this;
    }
}