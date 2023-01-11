package openapisdk.models.operations;



public class RemoveWirelessLanRequest {
    public RemoveWirelessLanPathParams pathParams;
    public RemoveWirelessLanRequest withPathParams(RemoveWirelessLanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveWirelessLanSecurity security;
    public RemoveWirelessLanRequest withSecurity(RemoveWirelessLanSecurity security) {
        this.security = security;
        return this;
    }
}