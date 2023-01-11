package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest {
    public AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams pathParams;
    public AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest withPathParams(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams queryParams;
    public AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest withQueryParams(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerApplyConfigurationRequest request;
    public AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest withRequest(openapisdk.models.shared.CustomerApplyConfigurationRequest request) {
        this.request = request;
        return this;
    }
}