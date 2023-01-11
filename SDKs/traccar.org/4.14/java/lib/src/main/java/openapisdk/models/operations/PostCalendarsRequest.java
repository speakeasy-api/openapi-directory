package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCalendarsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Calendar request;
    public PostCalendarsRequest withRequest(openapisdk.models.shared.Calendar request) {
        this.request = request;
        return this;
    }
}