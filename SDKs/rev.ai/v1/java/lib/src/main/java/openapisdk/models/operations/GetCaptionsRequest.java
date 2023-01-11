package openapisdk.models.operations;



public class GetCaptionsRequest {
    public GetCaptionsPathParams pathParams;
    public GetCaptionsRequest withPathParams(GetCaptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCaptionsQueryParams queryParams;
    public GetCaptionsRequest withQueryParams(GetCaptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCaptionsHeaders headers;
    public GetCaptionsRequest withHeaders(GetCaptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}