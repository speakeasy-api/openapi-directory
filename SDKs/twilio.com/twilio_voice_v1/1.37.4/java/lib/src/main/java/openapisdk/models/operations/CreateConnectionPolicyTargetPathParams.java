package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionPolicyTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectionPolicySid")
    public String connectionPolicySid;
    public CreateConnectionPolicyTargetPathParams withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
}