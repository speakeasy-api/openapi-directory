package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundTagsRemoveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostQuoteImageBackgroundTagsRemoveQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PostQuoteImageBackgroundTagsRemoveQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}