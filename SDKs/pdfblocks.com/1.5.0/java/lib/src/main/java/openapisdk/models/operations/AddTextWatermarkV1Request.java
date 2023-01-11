package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTextWatermarkV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddTextWatermarkV1RequestBody request;
    public AddTextWatermarkV1Request withRequest(AddTextWatermarkV1RequestBody request) {
        this.request = request;
        return this;
    }
}