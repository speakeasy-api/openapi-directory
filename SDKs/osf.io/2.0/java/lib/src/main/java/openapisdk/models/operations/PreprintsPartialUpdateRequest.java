package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsPartialUpdateRequest {
    public PreprintsPartialUpdatePathParams pathParams;
    public PreprintsPartialUpdateRequest withPathParams(PreprintsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PreprintsPartialUpdateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}