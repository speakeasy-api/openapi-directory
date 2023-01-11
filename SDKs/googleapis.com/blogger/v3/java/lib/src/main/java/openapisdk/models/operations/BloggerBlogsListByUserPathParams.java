package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogsListByUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BloggerBlogsListByUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}