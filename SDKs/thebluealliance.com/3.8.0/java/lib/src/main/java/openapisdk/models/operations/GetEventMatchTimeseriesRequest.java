package openapisdk.models.operations;



public class GetEventMatchTimeseriesRequest {
    public GetEventMatchTimeseriesPathParams pathParams;
    public GetEventMatchTimeseriesRequest withPathParams(GetEventMatchTimeseriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventMatchTimeseriesHeaders headers;
    public GetEventMatchTimeseriesRequest withHeaders(GetEventMatchTimeseriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventMatchTimeseriesSecurity security;
    public GetEventMatchTimeseriesRequest withSecurity(GetEventMatchTimeseriesSecurity security) {
        this.security = security;
        return this;
    }
}