package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRateLimitCreateRateLimitRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public CreateRateLimitCreateRateLimitRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateRateLimitCreateRateLimitRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}