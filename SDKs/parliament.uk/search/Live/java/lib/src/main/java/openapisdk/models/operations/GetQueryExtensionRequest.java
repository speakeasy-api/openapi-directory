package openapisdk.models.operations;



public class GetQueryExtensionRequest {
    public GetQueryExtensionPathParams pathParams;
    public GetQueryExtensionRequest withPathParams(GetQueryExtensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetQueryExtensionQueryParams queryParams;
    public GetQueryExtensionRequest withQueryParams(GetQueryExtensionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}