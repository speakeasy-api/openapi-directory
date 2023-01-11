package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCisLineTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CisLineId")
    public String cisLineId;
    public PutCisLineTagPathParams withCisLineId(String cisLineId) {
        this.cisLineId = cisLineId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutCisLineTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public PutCisLineTagPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutCisLineTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}