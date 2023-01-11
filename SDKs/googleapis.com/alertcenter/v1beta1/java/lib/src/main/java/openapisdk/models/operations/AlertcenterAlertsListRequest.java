package openapisdk.models.operations;



public class AlertcenterAlertsListRequest {
    public AlertcenterAlertsListQueryParams queryParams;
    public AlertcenterAlertsListRequest withQueryParams(AlertcenterAlertsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AlertcenterAlertsListSecurity security;
    public AlertcenterAlertsListRequest withSecurity(AlertcenterAlertsListSecurity security) {
        this.security = security;
        return this;
    }
}