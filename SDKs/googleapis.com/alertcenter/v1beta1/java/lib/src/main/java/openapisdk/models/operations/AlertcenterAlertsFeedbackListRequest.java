package openapisdk.models.operations;



public class AlertcenterAlertsFeedbackListRequest {
    public AlertcenterAlertsFeedbackListPathParams pathParams;
    public AlertcenterAlertsFeedbackListRequest withPathParams(AlertcenterAlertsFeedbackListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AlertcenterAlertsFeedbackListQueryParams queryParams;
    public AlertcenterAlertsFeedbackListRequest withQueryParams(AlertcenterAlertsFeedbackListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AlertcenterAlertsFeedbackListSecurity security;
    public AlertcenterAlertsFeedbackListRequest withSecurity(AlertcenterAlertsFeedbackListSecurity security) {
        this.security = security;
        return this;
    }
}