package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsFeedbackCreateRequest {
    public AlertcenterAlertsFeedbackCreatePathParams pathParams;
    public AlertcenterAlertsFeedbackCreateRequest withPathParams(AlertcenterAlertsFeedbackCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AlertcenterAlertsFeedbackCreateQueryParams queryParams;
    public AlertcenterAlertsFeedbackCreateRequest withQueryParams(AlertcenterAlertsFeedbackCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AlertFeedback request;
    public AlertcenterAlertsFeedbackCreateRequest withRequest(openapisdk.models.shared.AlertFeedback request) {
        this.request = request;
        return this;
    }
    public AlertcenterAlertsFeedbackCreateSecurity security;
    public AlertcenterAlertsFeedbackCreateRequest withSecurity(AlertcenterAlertsFeedbackCreateSecurity security) {
        this.security = security;
        return this;
    }
}