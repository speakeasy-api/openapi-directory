package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCisLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineId")
    public String cisLineId;
    public DeleteCisLinePathParams withCisLineId(String cisLineId) {
        this.cisLineId = cisLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteCisLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public DeleteCisLinePathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}