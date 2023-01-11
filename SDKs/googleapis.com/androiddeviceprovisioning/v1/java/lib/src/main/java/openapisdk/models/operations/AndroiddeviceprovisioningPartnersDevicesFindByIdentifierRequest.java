package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest {
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams pathParams;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest withPathParams(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest withQueryParams(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindDevicesByDeviceIdentifierRequest request;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest withRequest(openapisdk.models.shared.FindDevicesByDeviceIdentifierRequest request) {
        this.request = request;
        return this;
    }
}