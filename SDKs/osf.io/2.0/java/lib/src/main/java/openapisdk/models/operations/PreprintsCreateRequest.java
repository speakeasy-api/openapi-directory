package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PreprintsCreatePreprintInput request;
    public PreprintsCreateRequest withRequest(PreprintsCreatePreprintInput request) {
        this.request = request;
        return this;
    }
}