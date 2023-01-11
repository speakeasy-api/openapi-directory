package openapisdk.models.operations;



public class AdsenseAccountsAdclientsListResponse {
    public String contentType;
    public AdsenseAccountsAdclientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdClientsResponse listAdClientsResponse;
    public AdsenseAccountsAdclientsListResponse withListAdClientsResponse(openapisdk.models.shared.ListAdClientsResponse listAdClientsResponse) {
        this.listAdClientsResponse = listAdClientsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}