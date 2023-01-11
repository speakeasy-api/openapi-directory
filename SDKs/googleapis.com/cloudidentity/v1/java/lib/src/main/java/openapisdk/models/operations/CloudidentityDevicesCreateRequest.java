package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesCreateRequest {
    public CloudidentityDevicesCreateQueryParams queryParams;
    public CloudidentityDevicesCreateRequest withQueryParams(CloudidentityDevicesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1DeviceInput request;
    public CloudidentityDevicesCreateRequest withRequest(openapisdk.models.shared.GoogleAppsCloudidentityDevicesV1DeviceInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityDevicesCreateSecurity security;
    public CloudidentityDevicesCreateRequest withSecurity(CloudidentityDevicesCreateSecurity security) {
        this.security = security;
        return this;
    }
}