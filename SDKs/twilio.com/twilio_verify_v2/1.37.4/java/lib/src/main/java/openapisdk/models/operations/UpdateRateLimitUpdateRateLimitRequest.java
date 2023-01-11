package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRateLimitUpdateRateLimitRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public UpdateRateLimitUpdateRateLimitRequest withDescription(String description) {
        this.description = description;
        return this;
    }
}