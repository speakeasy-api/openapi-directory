package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest {
    public AndroiddeviceprovisioningPartnersDevicesClaimAsyncPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesClaimAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesClaimAsyncQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesClaimAsyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClaimDevicesRequest request;
    public AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest withRequest(openapisdk.models.shared.ClaimDevicesRequest request) {
        this.request = request;
        return this;
    }
}