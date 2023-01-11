package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFlexFlowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteFlexFlowPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}