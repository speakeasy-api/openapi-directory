package openapisdk.models.operations;



public class ChineseNameMatchRequest {
    public ChineseNameMatchPathParams pathParams;
    public ChineseNameMatchRequest withPathParams(ChineseNameMatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChineseNameMatchSecurity security;
    public ChineseNameMatchRequest withSecurity(ChineseNameMatchSecurity security) {
        this.security = security;
        return this;
    }
}