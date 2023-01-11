package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PredictImageRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public PredictImageRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}