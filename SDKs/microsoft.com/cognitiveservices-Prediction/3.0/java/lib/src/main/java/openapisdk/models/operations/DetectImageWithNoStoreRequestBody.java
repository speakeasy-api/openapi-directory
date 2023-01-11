package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageWithNoStoreRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public DetectImageWithNoStoreRequestBodyImageData imageData;
    public DetectImageWithNoStoreRequestBody withImageData(DetectImageWithNoStoreRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}