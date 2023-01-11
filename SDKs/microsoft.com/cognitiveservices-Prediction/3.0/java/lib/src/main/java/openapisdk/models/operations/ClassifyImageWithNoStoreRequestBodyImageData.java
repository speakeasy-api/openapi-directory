package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageWithNoStoreRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ClassifyImageWithNoStoreRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public ClassifyImageWithNoStoreRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}