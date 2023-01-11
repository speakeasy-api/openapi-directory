package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PredictImageRequestBodyImageData imageData;
    public PredictImageRequestBody withImageData(PredictImageRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}