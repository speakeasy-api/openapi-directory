package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageWatermarkRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ImageWatermarkRequestBody request;
    public ImageWatermarkRequest withRequest(ImageWatermarkRequestBody request) {
        this.request = request;
        return this;
    }
}