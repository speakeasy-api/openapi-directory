package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCisLineTypeTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineTypeId")
    public String cisLineTypeId;
    public DeleteCisLineTypeTagPathParams withCisLineTypeId(String cisLineTypeId) {
        this.cisLineTypeId = cisLineTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteCisLineTypeTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeleteCisLineTypeTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}