package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisLineTypesWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisLineTypesWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetCisLineTypesWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}