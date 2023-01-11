package openapisdk.models.operations;



public class GetCapabilitiesRequest {
    public GetCapabilitiesPathParams pathParams;
    public GetCapabilitiesRequest withPathParams(GetCapabilitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCapabilitiesQueryParams queryParams;
    public GetCapabilitiesRequest withQueryParams(GetCapabilitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}