package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayCodeTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutPayCodeTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayCodeId")
    public String payCodeId;
    public PutPayCodeTagPathParams withPayCodeId(String payCodeId) {
        this.payCodeId = payCodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public PutPayCodeTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}