package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromCisInstructionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisInstructionId")
    public String cisInstructionId;
    public GetTagFromCisInstructionPathParams withCisInstructionId(String cisInstructionId) {
        this.cisInstructionId = cisInstructionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromCisInstructionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetTagFromCisInstructionPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromCisInstructionPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}