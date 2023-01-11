package openapisdk.models.operations;



public class PatchQshowRequest {
    public PatchQshowQueryParams queryParams;
    public PatchQshowRequest withQueryParams(PatchQshowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatchQshowSecurity security;
    public PatchQshowRequest withSecurity(PatchQshowSecurity security) {
        this.security = security;
        return this;
    }
}