package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesUnclaimRequest {
    public AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams pathParams;
    public AndroiddeviceprovisioningCustomersDevicesUnclaimRequest withPathParams(AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningCustomersDevicesUnclaimQueryParams queryParams;
    public AndroiddeviceprovisioningCustomersDevicesUnclaimRequest withQueryParams(AndroiddeviceprovisioningCustomersDevicesUnclaimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerUnclaimDeviceRequest request;
    public AndroiddeviceprovisioningCustomersDevicesUnclaimRequest withRequest(openapisdk.models.shared.CustomerUnclaimDeviceRequest request) {
        this.request = request;
        return this;
    }
}