package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchWorkspacePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}