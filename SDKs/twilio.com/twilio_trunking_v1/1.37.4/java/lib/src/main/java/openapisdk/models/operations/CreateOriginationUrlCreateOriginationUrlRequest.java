package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOriginationUrlCreateOriginationUrlRequest {
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public CreateOriginationUrlCreateOriginationUrlRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateOriginationUrlCreateOriginationUrlRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public Long priority;
    public CreateOriginationUrlCreateOriginationUrlRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipUrl")
    public String sipUrl;
    public CreateOriginationUrlCreateOriginationUrlRequest withSipUrl(String sipUrl) {
        this.sipUrl = sipUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Weight")
    public Long weight;
    public CreateOriginationUrlCreateOriginationUrlRequest withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}