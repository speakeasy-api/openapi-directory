package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodAlt1Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVodAlt1RequestBody request;
    public CreateVodAlt1Request withRequest(CreateVodAlt1RequestBody request) {
        this.request = request;
        return this;
    }
}