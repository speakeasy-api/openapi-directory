package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllSubContractorTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllSubContractorTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}