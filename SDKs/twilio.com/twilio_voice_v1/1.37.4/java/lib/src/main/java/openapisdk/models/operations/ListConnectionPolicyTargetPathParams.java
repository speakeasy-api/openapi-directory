package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectionPolicyTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectionPolicySid")
    public String connectionPolicySid;
    public ListConnectionPolicyTargetPathParams withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
}