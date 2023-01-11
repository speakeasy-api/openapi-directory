package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConnectionPolicyTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectionPolicySid")
    public String connectionPolicySid;
    public FetchConnectionPolicyTargetPathParams withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConnectionPolicyTargetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}