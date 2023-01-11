package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBRandingConfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BrandingConf request;
    public UpdateBRandingConfRequest withRequest(openapisdk.models.shared.BrandingConf request) {
        this.request = request;
        return this;
    }
}