package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllRtiTransactionTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllRtiTransactionTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}