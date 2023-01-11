package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllThirdPartyTransactionTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllThirdPartyTransactionTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}