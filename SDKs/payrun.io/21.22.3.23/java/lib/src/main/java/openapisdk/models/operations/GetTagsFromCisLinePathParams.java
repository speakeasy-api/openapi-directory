package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromCisLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineId")
    public String cisLineId;
    public GetTagsFromCisLinePathParams withCisLineId(String cisLineId) {
        this.cisLineId = cisLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagsFromCisLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetTagsFromCisLinePathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}