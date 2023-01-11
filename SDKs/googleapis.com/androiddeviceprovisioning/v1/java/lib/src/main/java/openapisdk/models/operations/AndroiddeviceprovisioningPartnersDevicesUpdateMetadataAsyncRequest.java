package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest {
    public AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDeviceMetadataInBatchRequest request;
    public AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest withRequest(openapisdk.models.shared.UpdateDeviceMetadataInBatchRequest request) {
        this.request = request;
        return this;
    }
}