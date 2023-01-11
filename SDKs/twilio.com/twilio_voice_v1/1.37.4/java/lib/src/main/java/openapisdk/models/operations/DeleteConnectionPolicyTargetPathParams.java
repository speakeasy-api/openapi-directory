package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectionPolicyTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectionPolicySid")
    public String connectionPolicySid;
    public DeleteConnectionPolicyTargetPathParams withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteConnectionPolicyTargetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}