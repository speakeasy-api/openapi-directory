package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOriginationUrlUpdateOriginationUrlRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateOriginationUrlUpdateOriginationUrlRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateOriginationUrlUpdateOriginationUrlRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public UpdateOriginationUrlUpdateOriginationUrlRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipUrl")
    public String sipUrl;
    public UpdateOriginationUrlUpdateOriginationUrlRequest withSipUrl(String sipUrl) {
        this.sipUrl = sipUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Weight")
    public Long weight;
    public UpdateOriginationUrlUpdateOriginationUrlRequest withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}