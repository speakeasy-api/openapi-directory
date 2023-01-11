package openapisdk.models.operations;



public class AlertcenterAlertsListResponse {
    public String contentType;
    public AlertcenterAlertsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAlertsResponse listAlertsResponse;
    public AlertcenterAlertsListResponse withListAlertsResponse(openapisdk.models.shared.ListAlertsResponse listAlertsResponse) {
        this.listAlertsResponse = listAlertsResponse;
        return this;
    }
    public Long statusCode;
    public AlertcenterAlertsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}