package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageWithNoStoreRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public DetectImageWithNoStoreRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public DetectImageWithNoStoreRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}