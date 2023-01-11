package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageWatermarkV1RequestBodyImage {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public AddImageWatermarkV1RequestBodyImage withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image")
    public String image;
    public AddImageWatermarkV1RequestBodyImage withImage(String image) {
        this.image = image;
        return this;
    }
}