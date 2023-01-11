package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public QuickTestImageRequestBodyImageData imageData;
    public QuickTestImageRequestBody withImageData(QuickTestImageRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}