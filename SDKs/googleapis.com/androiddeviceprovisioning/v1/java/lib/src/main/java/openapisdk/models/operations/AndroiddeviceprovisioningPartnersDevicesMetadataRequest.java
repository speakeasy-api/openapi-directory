package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesMetadataRequest {
    public AndroiddeviceprovisioningPartnersDevicesMetadataPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesMetadataRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesMetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesMetadataRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDeviceMetadataRequest request;
    public AndroiddeviceprovisioningPartnersDevicesMetadataRequest withRequest(openapisdk.models.shared.UpdateDeviceMetadataRequest request) {
        this.request = request;
        return this;
    }
}