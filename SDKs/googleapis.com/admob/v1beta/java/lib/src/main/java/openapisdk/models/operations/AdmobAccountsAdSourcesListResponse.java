package openapisdk.models.operations;



public class AdmobAccountsAdSourcesListResponse {
    public String contentType;
    public AdmobAccountsAdSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdSourcesResponse listAdSourcesResponse;
    public AdmobAccountsAdSourcesListResponse withListAdSourcesResponse(openapisdk.models.shared.ListAdSourcesResponse listAdSourcesResponse) {
        this.listAdSourcesResponse = listAdSourcesResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsAdSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}