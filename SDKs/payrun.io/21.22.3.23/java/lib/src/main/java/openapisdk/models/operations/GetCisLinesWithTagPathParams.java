package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCisLinesWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetCisLinesWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetCisLinesWithTagPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetCisLinesWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}