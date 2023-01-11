package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisInstructionsFromSubContractorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisInstructionsFromSubContractorPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetCisInstructionsFromSubContractorPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}