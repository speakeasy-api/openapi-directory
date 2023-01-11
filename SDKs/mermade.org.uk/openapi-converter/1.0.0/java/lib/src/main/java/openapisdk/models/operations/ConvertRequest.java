package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ConvertRequestBody request;
    public ConvertRequest withRequest(ConvertRequestBody request) {
        this.request = request;
        return this;
    }
}