package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventRequest {
    public CreateEventPathParams pathParams;
    public CreateEventRequest withPathParams(CreateEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEventRequestBody request;
    public CreateEventRequest withRequest(CreateEventRequestBody request) {
        this.request = request;
        return this;
    }
}