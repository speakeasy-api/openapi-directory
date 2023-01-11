package openapisdk.models.operations;



public class GetWirelessLanRequest {
    public GetWirelessLanPathParams pathParams;
    public GetWirelessLanRequest withPathParams(GetWirelessLanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWirelessLanSecurity security;
    public GetWirelessLanRequest withSecurity(GetWirelessLanSecurity security) {
        this.security = security;
        return this;
    }
}