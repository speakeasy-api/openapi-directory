package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public AndroiddeviceprovisioningPartnersDevicesMetadataPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=metadataOwnerId")
    public String metadataOwnerId;
    public AndroiddeviceprovisioningPartnersDevicesMetadataPathParams withMetadataOwnerId(String metadataOwnerId) {
        this.metadataOwnerId = metadataOwnerId;
        return this;
    }
}