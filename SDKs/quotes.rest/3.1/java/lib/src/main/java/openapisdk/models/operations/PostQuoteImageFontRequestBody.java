package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageFontRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostQuoteImageFontRequestBodyFont font;
    public PostQuoteImageFontRequestBody withFont(PostQuoteImageFontRequestBodyFont font) {
        this.font = font;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tags")
    public String tags;
    public PostQuoteImageFontRequestBody withTags(String tags) {
        this.tags = tags;
        return this;
    }
}