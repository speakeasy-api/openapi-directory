package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HashtagsCleanerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=post")
    public String post;
    public HashtagsCleanerQueryParams withPost(String post) {
        this.post = post;
        return this;
    }
}