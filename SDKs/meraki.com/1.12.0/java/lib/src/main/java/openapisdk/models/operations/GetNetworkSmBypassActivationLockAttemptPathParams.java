package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmBypassActivationLockAttemptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attemptId")
    public String attemptId;
    public GetNetworkSmBypassActivationLockAttemptPathParams withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSmBypassActivationLockAttemptPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}