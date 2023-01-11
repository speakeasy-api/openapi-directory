package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteTagsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostQuoteTagsAddQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PostQuoteTagsAddQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}