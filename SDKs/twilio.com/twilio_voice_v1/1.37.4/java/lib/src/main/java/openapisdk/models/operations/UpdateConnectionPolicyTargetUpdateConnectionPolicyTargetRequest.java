package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public String target;
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("form:name=Weight")
    public Long weight;
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}