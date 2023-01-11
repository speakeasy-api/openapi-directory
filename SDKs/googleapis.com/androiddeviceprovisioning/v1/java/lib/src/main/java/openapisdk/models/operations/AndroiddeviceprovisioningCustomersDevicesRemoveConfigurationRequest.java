package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest {
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams pathParams;
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest withPathParams(AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationQueryParams queryParams;
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest withQueryParams(AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerRemoveConfigurationRequest request;
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest withRequest(openapisdk.models.shared.CustomerRemoveConfigurationRequest request) {
        this.request = request;
        return this;
    }
}