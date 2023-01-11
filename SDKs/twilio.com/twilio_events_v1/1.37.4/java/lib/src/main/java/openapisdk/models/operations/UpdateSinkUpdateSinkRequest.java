package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSinkUpdateSinkRequest {
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public UpdateSinkUpdateSinkRequest withDescription(String description) {
        this.description = description;
        return this;
    }
}