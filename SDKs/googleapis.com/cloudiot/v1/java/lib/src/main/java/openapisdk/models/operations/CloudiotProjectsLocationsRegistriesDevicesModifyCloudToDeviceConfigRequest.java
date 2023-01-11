package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest {
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest withPathParams(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest withQueryParams(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyCloudToDeviceConfigRequest request;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest withRequest(openapisdk.models.shared.ModifyCloudToDeviceConfigRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity security;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest withSecurity(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity security) {
        this.security = security;
        return this;
    }
}