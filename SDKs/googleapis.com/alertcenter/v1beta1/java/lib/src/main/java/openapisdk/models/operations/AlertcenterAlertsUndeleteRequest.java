package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsUndeleteRequest {
    public AlertcenterAlertsUndeletePathParams pathParams;
    public AlertcenterAlertsUndeleteRequest withPathParams(AlertcenterAlertsUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AlertcenterAlertsUndeleteQueryParams queryParams;
    public AlertcenterAlertsUndeleteRequest withQueryParams(AlertcenterAlertsUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeleteAlertRequest request;
    public AlertcenterAlertsUndeleteRequest withRequest(openapisdk.models.shared.UndeleteAlertRequest request) {
        this.request = request;
        return this;
    }
    public AlertcenterAlertsUndeleteSecurity security;
    public AlertcenterAlertsUndeleteRequest withSecurity(AlertcenterAlertsUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}