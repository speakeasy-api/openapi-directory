package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsNotificationConfigsCreateRequest {
    public SecuritycenterProjectsNotificationConfigsCreatePathParams pathParams;
    public SecuritycenterProjectsNotificationConfigsCreateRequest withPathParams(SecuritycenterProjectsNotificationConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsNotificationConfigsCreateQueryParams queryParams;
    public SecuritycenterProjectsNotificationConfigsCreateRequest withQueryParams(SecuritycenterProjectsNotificationConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotificationConfigInput request;
    public SecuritycenterProjectsNotificationConfigsCreateRequest withRequest(openapisdk.models.shared.NotificationConfigInput request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsNotificationConfigsCreateSecurity security;
    public SecuritycenterProjectsNotificationConfigsCreateRequest withSecurity(SecuritycenterProjectsNotificationConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}