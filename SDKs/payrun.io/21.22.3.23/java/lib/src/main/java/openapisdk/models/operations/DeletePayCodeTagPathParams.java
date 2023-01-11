package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePayCodeTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeletePayCodeTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayCodeId")
    public String payCodeId;
    public DeletePayCodeTagPathParams withPayCodeId(String payCodeId) {
        this.payCodeId = payCodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeletePayCodeTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}