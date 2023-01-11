package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageFontTagsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostQuoteImageFontTagsAddQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PostQuoteImageFontTagsAddQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}