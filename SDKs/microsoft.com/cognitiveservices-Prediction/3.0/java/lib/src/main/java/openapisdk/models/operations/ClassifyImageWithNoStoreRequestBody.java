package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageWithNoStoreRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ClassifyImageWithNoStoreRequestBodyImageData imageData;
    public ClassifyImageWithNoStoreRequestBody withImageData(ClassifyImageWithNoStoreRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}