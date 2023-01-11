package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesClaimRequest {
    public AndroiddeviceprovisioningPartnersDevicesClaimPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesClaimRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesClaimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesClaimQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesClaimRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesClaimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClaimDeviceRequest request;
    public AndroiddeviceprovisioningPartnersDevicesClaimRequest withRequest(openapisdk.models.shared.ClaimDeviceRequest request) {
        this.request = request;
        return this;
    }
}