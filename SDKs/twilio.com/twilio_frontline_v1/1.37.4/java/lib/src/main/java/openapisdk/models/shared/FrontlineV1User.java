package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FrontlineV1User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar")
    public String avatar;
    public FrontlineV1User withAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public FrontlineV1User withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public FrontlineV1User withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_available")
    public Boolean isAvailable;
    public FrontlineV1User withIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public FrontlineV1User withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UserEnumStateTypeEnum state;
    public FrontlineV1User withState(UserEnumStateTypeEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FrontlineV1User withUrl(String url) {
        this.url = url;
        return this;
    }
}