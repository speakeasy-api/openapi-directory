package openapisdk.models.operations;



public class GetDistrictEventsKeysRequest {
    public GetDistrictEventsKeysPathParams pathParams;
    public GetDistrictEventsKeysRequest withPathParams(GetDistrictEventsKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictEventsKeysHeaders headers;
    public GetDistrictEventsKeysRequest withHeaders(GetDistrictEventsKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictEventsKeysSecurity security;
    public GetDistrictEventsKeysRequest withSecurity(GetDistrictEventsKeysSecurity security) {
        this.security = security;
        return this;
    }
}