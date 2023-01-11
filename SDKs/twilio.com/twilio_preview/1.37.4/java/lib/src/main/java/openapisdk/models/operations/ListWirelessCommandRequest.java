package openapisdk.models.operations;



public class ListWirelessCommandRequest {
    public String serverURL;
    public ListWirelessCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWirelessCommandQueryParams queryParams;
    public ListWirelessCommandRequest withQueryParams(ListWirelessCommandQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWirelessCommandSecurity security;
    public ListWirelessCommandRequest withSecurity(ListWirelessCommandSecurity security) {
        this.security = security;
        return this;
    }
}