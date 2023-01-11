package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDpsMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DpsMessageId")
    public String dpsMessageId;
    public PutDpsMessagePathParams withDpsMessageId(String dpsMessageId) {
        this.dpsMessageId = dpsMessageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutDpsMessagePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}