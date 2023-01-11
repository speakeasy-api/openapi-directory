package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisLineTypeTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineTypeId")
    public String cisLineTypeId;
    public PutCisLineTypeTagPathParams withCisLineTypeId(String cisLineTypeId) {
        this.cisLineTypeId = cisLineTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutCisLineTypeTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutCisLineTypeTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}