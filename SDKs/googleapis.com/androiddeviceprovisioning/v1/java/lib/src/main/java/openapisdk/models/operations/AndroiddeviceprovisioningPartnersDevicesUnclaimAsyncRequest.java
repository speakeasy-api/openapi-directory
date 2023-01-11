package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest {
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnclaimDevicesRequest request;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest withRequest(openapisdk.models.shared.UnclaimDevicesRequest request) {
        this.request = request;
        return this;
    }
}