package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubContractorRevisionByNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetSubContractorRevisionByNumberPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RevisionNumber")
    public String revisionNumber;
    public GetSubContractorRevisionByNumberPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetSubContractorRevisionByNumberPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}