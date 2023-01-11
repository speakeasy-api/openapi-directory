package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisLineFromSubContractorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineId")
    public String cisLineId;
    public GetCisLineFromSubContractorPathParams withCisLineId(String cisLineId) {
        this.cisLineId = cisLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisLineFromSubContractorPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetCisLineFromSubContractorPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}