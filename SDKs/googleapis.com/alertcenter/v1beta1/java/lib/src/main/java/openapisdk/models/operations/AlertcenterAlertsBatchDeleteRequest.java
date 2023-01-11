package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsBatchDeleteRequest {
    public AlertcenterAlertsBatchDeleteQueryParams queryParams;
    public AlertcenterAlertsBatchDeleteRequest withQueryParams(AlertcenterAlertsBatchDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteAlertsRequest request;
    public AlertcenterAlertsBatchDeleteRequest withRequest(openapisdk.models.shared.BatchDeleteAlertsRequest request) {
        this.request = request;
        return this;
    }
    public AlertcenterAlertsBatchDeleteSecurity security;
    public AlertcenterAlertsBatchDeleteRequest withSecurity(AlertcenterAlertsBatchDeleteSecurity security) {
        this.security = security;
        return this;
    }
}