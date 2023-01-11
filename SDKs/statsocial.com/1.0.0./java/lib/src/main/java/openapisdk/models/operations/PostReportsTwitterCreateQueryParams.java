package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsTwitterCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostReportsTwitterCreateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=twitter_handle")
    public String twitterHandle;
    public PostReportsTwitterCreateQueryParams withTwitterHandle(String twitterHandle) {
        this.twitterHandle = twitterHandle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=twitter_id")
    public Long twitterId;
    public PostReportsTwitterCreateQueryParams withTwitterId(Long twitterId) {
        this.twitterId = twitterId;
        return this;
    }
}