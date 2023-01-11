package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTicketRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateTicketRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}