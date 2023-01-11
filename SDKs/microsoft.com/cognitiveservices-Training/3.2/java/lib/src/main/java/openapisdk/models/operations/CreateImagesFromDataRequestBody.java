package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagesFromDataRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public CreateImagesFromDataRequestBodyImageData imageData;
    public CreateImagesFromDataRequestBody withImageData(CreateImagesFromDataRequestBodyImageData imageData) {
        this.imageData = imageData;
        return this;
    }
}