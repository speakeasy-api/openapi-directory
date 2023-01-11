package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoHashtagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hashtagPosition")
    public String hashtagPosition;
    public AutoHashtagQueryParams withHashtagPosition(String hashtagPosition) {
        this.hashtagPosition = hashtagPosition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxHashtags")
    public Long maxHashtags;
    public AutoHashtagQueryParams withMaxHashtags(Long maxHashtags) {
        this.maxHashtags = maxHashtags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=post")
    public String post;
    public AutoHashtagQueryParams withPost(String post) {
        this.post = post;
        return this;
    }
}