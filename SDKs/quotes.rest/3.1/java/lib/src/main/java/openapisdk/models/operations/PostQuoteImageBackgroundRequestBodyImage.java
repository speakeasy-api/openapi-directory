package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundRequestBodyImage {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostQuoteImageBackgroundRequestBodyImage withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image")
    public String image;
    public PostQuoteImageBackgroundRequestBodyImage withImage(String image) {
        this.image = image;
        return this;
    }
}