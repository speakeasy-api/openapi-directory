package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateConnectionPolicyPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}