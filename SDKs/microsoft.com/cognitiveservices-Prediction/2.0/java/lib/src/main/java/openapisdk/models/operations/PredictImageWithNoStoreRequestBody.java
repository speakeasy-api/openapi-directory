package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageWithNoStoreRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PredictImageWithNoStoreRequestBodyImageData imageData;
    public PredictImageWithNoStoreRequestBody withImageData(PredictImageWithNoStoreRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}