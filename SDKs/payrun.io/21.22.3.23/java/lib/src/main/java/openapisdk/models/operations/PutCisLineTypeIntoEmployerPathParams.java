package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisLineTypeIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineTypeId")
    public String cisLineTypeId;
    public PutCisLineTypeIntoEmployerPathParams withCisLineTypeId(String cisLineTypeId) {
        this.cisLineTypeId = cisLineTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutCisLineTypeIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}