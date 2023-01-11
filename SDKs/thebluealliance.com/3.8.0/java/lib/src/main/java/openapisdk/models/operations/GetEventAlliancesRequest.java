package openapisdk.models.operations;



public class GetEventAlliancesRequest {
    public GetEventAlliancesPathParams pathParams;
    public GetEventAlliancesRequest withPathParams(GetEventAlliancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventAlliancesHeaders headers;
    public GetEventAlliancesRequest withHeaders(GetEventAlliancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventAlliancesSecurity security;
    public GetEventAlliancesRequest withSecurity(GetEventAlliancesSecurity security) {
        this.security = security;
        return this;
    }
}