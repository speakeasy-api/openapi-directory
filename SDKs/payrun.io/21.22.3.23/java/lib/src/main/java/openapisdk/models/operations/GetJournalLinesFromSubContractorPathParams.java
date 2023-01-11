package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalLinesFromSubContractorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetJournalLinesFromSubContractorPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubContractorId")
    public String subContractorId;
    public GetJournalLinesFromSubContractorPathParams withSubContractorId(String subContractorId) {
        this.subContractorId = subContractorId;
        return this;
    }
}