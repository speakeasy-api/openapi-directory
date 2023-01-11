package openapisdk.models.operations;



public class AdmobAccountsAppsListResponse {
    public String contentType;
    public AdmobAccountsAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAppsResponse listAppsResponse;
    public AdmobAccountsAppsListResponse withListAppsResponse(openapisdk.models.shared.ListAppsResponse listAppsResponse) {
        this.listAppsResponse = listAppsResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}