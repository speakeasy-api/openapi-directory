package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageWatermarkV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddImageWatermarkV1RequestBody request;
    public AddImageWatermarkV1Request withRequest(AddImageWatermarkV1RequestBody request) {
        this.request = request;
        return this;
    }
}