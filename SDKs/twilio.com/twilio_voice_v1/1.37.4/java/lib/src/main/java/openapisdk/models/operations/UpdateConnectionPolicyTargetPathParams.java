package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectionPolicySid")
    public String connectionPolicySid;
    public UpdateConnectionPolicyTargetPathParams withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateConnectionPolicyTargetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}