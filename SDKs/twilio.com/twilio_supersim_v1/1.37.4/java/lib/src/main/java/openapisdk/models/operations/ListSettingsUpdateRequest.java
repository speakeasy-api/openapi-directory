package openapisdk.models.operations;



public class ListSettingsUpdateRequest {
    public String serverURL;
    public ListSettingsUpdateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSettingsUpdateQueryParams queryParams;
    public ListSettingsUpdateRequest withQueryParams(ListSettingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSettingsUpdateSecurity security;
    public ListSettingsUpdateRequest withSecurity(ListSettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}