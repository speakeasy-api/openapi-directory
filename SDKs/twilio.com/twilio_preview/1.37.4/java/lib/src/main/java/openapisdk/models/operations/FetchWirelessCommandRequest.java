package openapisdk.models.operations;



public class FetchWirelessCommandRequest {
    public String serverURL;
    public FetchWirelessCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWirelessCommandPathParams pathParams;
    public FetchWirelessCommandRequest withPathParams(FetchWirelessCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWirelessCommandSecurity security;
    public FetchWirelessCommandRequest withSecurity(FetchWirelessCommandSecurity security) {
        this.security = security;
        return this;
    }
}