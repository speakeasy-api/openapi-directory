package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCisLineTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineTypeId")
    public String cisLineTypeId;
    public DeleteCisLineTypePathParams withCisLineTypeId(String cisLineTypeId) {
        this.cisLineTypeId = cisLineTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteCisLineTypePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}