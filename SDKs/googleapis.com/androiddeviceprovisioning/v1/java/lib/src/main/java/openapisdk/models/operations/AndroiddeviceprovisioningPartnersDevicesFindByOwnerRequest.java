package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest {
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesFindByOwnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindDevicesByOwnerRequest request;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest withRequest(openapisdk.models.shared.FindDevicesByOwnerRequest request) {
        this.request = request;
        return this;
    }
}