package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public String target;
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("form:name=Weight")
    public Long weight;
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}