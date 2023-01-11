package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageResizeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ImageResizeRequestBody request;
    public ImageResizeRequest withRequest(ImageResizeRequestBody request) {
        this.request = request;
        return this;
    }
}