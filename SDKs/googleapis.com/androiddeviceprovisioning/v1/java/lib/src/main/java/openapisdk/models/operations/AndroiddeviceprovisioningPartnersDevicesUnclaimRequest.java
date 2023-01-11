package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesUnclaimRequest {
    public AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnclaimDeviceRequest request;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimRequest withRequest(openapisdk.models.shared.UnclaimDeviceRequest request) {
        this.request = request;
        return this;
    }
}