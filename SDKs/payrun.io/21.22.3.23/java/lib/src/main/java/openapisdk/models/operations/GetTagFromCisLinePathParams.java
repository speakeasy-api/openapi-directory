package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromCisLinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineId")
    public String cisLineId;
    public GetTagFromCisLinePathParams withCisLineId(String cisLineId) {
        this.cisLineId = cisLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromCisLinePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetTagFromCisLinePathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromCisLinePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}