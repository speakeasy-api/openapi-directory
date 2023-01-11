package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisInstructionFromSubContractorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisInstructionId")
    public String cisInstructionId;
    public GetCisInstructionFromSubContractorPathParams withCisInstructionId(String cisInstructionId) {
        this.cisInstructionId = cisInstructionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisInstructionFromSubContractorPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetCisInstructionFromSubContractorPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}