package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagesFromDataRequestBodyImageData {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateImagesFromDataRequestBodyImageData withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=imageData")
    public String imageData;
    public CreateImagesFromDataRequestBodyImageData withImageData(String imageData) {
        this.imageData = imageData;
        return this;
    }
}