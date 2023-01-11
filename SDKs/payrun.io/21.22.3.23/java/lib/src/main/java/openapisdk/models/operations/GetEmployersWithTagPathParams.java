package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployersWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetEmployersWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}