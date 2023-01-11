package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditUserAlt1Request {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.user+json")
    public EditUserAlt1RequestBody request;
    public EditUserAlt1Request withRequest(EditUserAlt1RequestBody request) {
        this.request = request;
        return this;
    }
}