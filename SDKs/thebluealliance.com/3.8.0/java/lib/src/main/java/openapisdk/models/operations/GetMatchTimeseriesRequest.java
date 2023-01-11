package openapisdk.models.operations;



public class GetMatchTimeseriesRequest {
    public GetMatchTimeseriesPathParams pathParams;
    public GetMatchTimeseriesRequest withPathParams(GetMatchTimeseriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMatchTimeseriesHeaders headers;
    public GetMatchTimeseriesRequest withHeaders(GetMatchTimeseriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetMatchTimeseriesSecurity security;
    public GetMatchTimeseriesRequest withSecurity(GetMatchTimeseriesSecurity security) {
        this.security = security;
        return this;
    }
}