package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NightModesettingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NightModesettingsRequest request;
    public NightModesettingsRequest withRequest(openapisdk.models.shared.NightModesettingsRequest request) {
        this.request = request;
        return this;
    }
}