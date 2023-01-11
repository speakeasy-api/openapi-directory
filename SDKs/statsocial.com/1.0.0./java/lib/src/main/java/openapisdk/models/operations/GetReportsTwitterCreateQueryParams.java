package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsTwitterCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetReportsTwitterCreateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=twitter_handle")
    public String twitterHandle;
    public GetReportsTwitterCreateQueryParams withTwitterHandle(String twitterHandle) {
        this.twitterHandle = twitterHandle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=twitter_id")
    public Long twitterId;
    public GetReportsTwitterCreateQueryParams withTwitterId(Long twitterId) {
        this.twitterId = twitterId;
        return this;
    }
}