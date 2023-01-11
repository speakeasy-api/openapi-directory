package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutUserTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public PutUserTagPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}