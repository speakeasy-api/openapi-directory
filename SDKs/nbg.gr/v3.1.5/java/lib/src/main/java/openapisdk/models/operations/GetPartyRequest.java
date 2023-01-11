package openapisdk.models.operations;



public class GetPartyRequest {
    public GetPartyHeaders headers;
    public GetPartyRequest withHeaders(GetPartyHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPartySecurity security;
    public GetPartyRequest withSecurity(GetPartySecurity security) {
        this.security = security;
        return this;
    }
}