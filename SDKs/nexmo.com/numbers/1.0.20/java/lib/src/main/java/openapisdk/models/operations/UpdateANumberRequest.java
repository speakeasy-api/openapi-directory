package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateANumberRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.NumberDetailsUpdate request;
    public UpdateANumberRequest withRequest(openapisdk.models.shared.NumberDetailsUpdate request) {
        this.request = request;
        return this;
    }
}