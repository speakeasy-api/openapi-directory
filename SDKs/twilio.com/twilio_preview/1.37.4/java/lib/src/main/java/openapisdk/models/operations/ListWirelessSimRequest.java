package openapisdk.models.operations;



public class ListWirelessSimRequest {
    public String serverURL;
    public ListWirelessSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWirelessSimQueryParams queryParams;
    public ListWirelessSimRequest withQueryParams(ListWirelessSimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWirelessSimSecurity security;
    public ListWirelessSimRequest withSecurity(ListWirelessSimSecurity security) {
        this.security = security;
        return this;
    }
}