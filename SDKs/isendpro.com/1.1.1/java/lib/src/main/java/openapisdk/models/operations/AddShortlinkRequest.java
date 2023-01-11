package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddShortlinkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShortlinkRequest request;
    public AddShortlinkRequest withRequest(openapisdk.models.shared.ShortlinkRequest request) {
        this.request = request;
        return this;
    }
}