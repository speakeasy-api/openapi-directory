package openapisdk.models.operations;



public class FetchWirelessSimRequest {
    public String serverURL;
    public FetchWirelessSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWirelessSimPathParams pathParams;
    public FetchWirelessSimRequest withPathParams(FetchWirelessSimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWirelessSimSecurity security;
    public FetchWirelessSimRequest withSecurity(FetchWirelessSimSecurity security) {
        this.security = security;
        return this;
    }
}