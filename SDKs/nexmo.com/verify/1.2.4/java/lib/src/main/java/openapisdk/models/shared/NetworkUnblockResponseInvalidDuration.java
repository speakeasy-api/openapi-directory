package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUnblockResponseInvalidDuration
 * Invalid Duration
**/
public class NetworkUnblockResponseInvalidDuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public NetworkUnblockResponseInvalidDuration withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public NetworkUnblockResponseInvalidDuration withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public NetworkUnblockResponseInvalidDurationInvalidParameters[] invalidParameters;
    public NetworkUnblockResponseInvalidDuration withInvalidParameters(NetworkUnblockResponseInvalidDurationInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public NetworkUnblockResponseInvalidDuration withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NetworkUnblockResponseInvalidDuration withType(String type) {
        this.type = type;
        return this;
    }
}