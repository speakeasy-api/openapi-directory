package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartScanPageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StartScanPageRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}