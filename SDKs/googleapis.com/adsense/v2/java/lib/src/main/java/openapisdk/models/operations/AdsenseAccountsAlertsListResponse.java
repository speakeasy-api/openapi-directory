package openapisdk.models.operations;



public class AdsenseAccountsAlertsListResponse {
    public String contentType;
    public AdsenseAccountsAlertsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAlertsResponse listAlertsResponse;
    public AdsenseAccountsAlertsListResponse withListAlertsResponse(openapisdk.models.shared.ListAlertsResponse listAlertsResponse) {
        this.listAlertsResponse = listAlertsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAlertsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}