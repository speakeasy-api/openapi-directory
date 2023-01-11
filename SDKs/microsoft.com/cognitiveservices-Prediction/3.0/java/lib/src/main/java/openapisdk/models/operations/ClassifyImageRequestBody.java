package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ClassifyImageRequestBodyImageData imageData;
    public ClassifyImageRequestBody withImageData(ClassifyImageRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}