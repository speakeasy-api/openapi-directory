package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromCisLineTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineTypeId")
    public String cisLineTypeId;
    public GetTagsFromCisLineTypePathParams withCisLineTypeId(String cisLineTypeId) {
        this.cisLineTypeId = cisLineTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagsFromCisLineTypePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}