package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ClassifyImageRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public ClassifyImageRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}