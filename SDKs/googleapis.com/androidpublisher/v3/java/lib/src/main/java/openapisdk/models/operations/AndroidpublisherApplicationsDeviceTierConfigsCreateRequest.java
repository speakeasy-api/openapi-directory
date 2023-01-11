package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherApplicationsDeviceTierConfigsCreateRequest {
    public AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams pathParams;
    public AndroidpublisherApplicationsDeviceTierConfigsCreateRequest withPathParams(AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams queryParams;
    public AndroidpublisherApplicationsDeviceTierConfigsCreateRequest withQueryParams(AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceTierConfigInput request;
    public AndroidpublisherApplicationsDeviceTierConfigsCreateRequest withRequest(openapisdk.models.shared.DeviceTierConfigInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity security;
    public AndroidpublisherApplicationsDeviceTierConfigsCreateRequest withSecurity(AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}