package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLocationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public AddLocationRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
}