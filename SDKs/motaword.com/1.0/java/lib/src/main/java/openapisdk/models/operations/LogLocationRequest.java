package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LogLocationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationUpdateContent request;
    public LogLocationRequest withRequest(openapisdk.models.shared.LocationUpdateContent request) {
        this.request = request;
        return this;
    }
}