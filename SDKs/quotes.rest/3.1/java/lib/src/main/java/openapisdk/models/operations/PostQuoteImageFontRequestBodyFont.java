package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageFontRequestBodyFont {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostQuoteImageFontRequestBodyFont withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=font")
    public String font;
    public PostQuoteImageFontRequestBodyFont withFont(String font) {
        this.font = font;
        return this;
    }
}