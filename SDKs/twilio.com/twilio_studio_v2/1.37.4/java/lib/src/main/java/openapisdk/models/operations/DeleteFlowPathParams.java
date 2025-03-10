package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFlowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteFlowPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}