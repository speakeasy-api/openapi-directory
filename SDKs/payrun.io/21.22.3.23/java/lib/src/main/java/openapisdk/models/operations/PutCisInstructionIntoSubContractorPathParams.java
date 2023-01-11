package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisInstructionIntoSubContractorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisInstructionId")
    public String cisInstructionId;
    public PutCisInstructionIntoSubContractorPathParams withCisInstructionId(String cisInstructionId) {
        this.cisInstructionId = cisInstructionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutCisInstructionIntoSubContractorPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public PutCisInstructionIntoSubContractorPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}