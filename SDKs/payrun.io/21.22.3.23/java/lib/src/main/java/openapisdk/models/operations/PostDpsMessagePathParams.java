package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDpsMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostDpsMessagePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}