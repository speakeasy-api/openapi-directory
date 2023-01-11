package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public DetectImageRequestBodyImageData imageData;
    public DetectImageRequestBody withImageData(DetectImageRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}