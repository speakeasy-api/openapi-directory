package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostQuoteImageBackgroundRequestBodyImage image;
    public PostQuoteImageBackgroundRequestBody withImage(PostQuoteImageBackgroundRequestBodyImage image) {
        this.image = image;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tags")
    public String tags;
    public PostQuoteImageBackgroundRequestBody withTags(String tags) {
        this.tags = tags;
        return this;
    }
}