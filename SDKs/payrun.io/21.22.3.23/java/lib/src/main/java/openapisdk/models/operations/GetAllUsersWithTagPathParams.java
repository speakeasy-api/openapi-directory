package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllUsersWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetAllUsersWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}