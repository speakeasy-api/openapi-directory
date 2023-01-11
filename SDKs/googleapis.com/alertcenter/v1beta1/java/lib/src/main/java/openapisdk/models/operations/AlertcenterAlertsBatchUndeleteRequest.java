package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsBatchUndeleteRequest {
    public AlertcenterAlertsBatchUndeleteQueryParams queryParams;
    public AlertcenterAlertsBatchUndeleteRequest withQueryParams(AlertcenterAlertsBatchUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUndeleteAlertsRequest request;
    public AlertcenterAlertsBatchUndeleteRequest withRequest(openapisdk.models.shared.BatchUndeleteAlertsRequest request) {
        this.request = request;
        return this;
    }
    public AlertcenterAlertsBatchUndeleteSecurity security;
    public AlertcenterAlertsBatchUndeleteRequest withSecurity(AlertcenterAlertsBatchUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}