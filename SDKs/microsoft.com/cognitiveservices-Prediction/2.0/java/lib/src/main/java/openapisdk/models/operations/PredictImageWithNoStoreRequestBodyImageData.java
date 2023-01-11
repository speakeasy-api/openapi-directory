package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageWithNoStoreRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PredictImageWithNoStoreRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public PredictImageWithNoStoreRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}