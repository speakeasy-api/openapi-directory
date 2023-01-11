package openapisdk.models.operations;



public class GetDistrictEventsSimpleRequest {
    public GetDistrictEventsSimplePathParams pathParams;
    public GetDistrictEventsSimpleRequest withPathParams(GetDistrictEventsSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictEventsSimpleHeaders headers;
    public GetDistrictEventsSimpleRequest withHeaders(GetDistrictEventsSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictEventsSimpleSecurity security;
    public GetDistrictEventsSimpleRequest withSecurity(GetDistrictEventsSimpleSecurity security) {
        this.security = security;
        return this;
    }
}