package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VoiceV1ConnectionPolicyConnectionPolicyTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_policy_sid")
    public String connectionPolicySid;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public VoiceV1ConnectionPolicyConnectionPolicyTarget withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}