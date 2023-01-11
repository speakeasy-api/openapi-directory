package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUnblockResponseUnprocessableNetwork
 * Invalid Network
**/
public class NetworkUnblockResponseUnprocessableNetwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public NetworkUnblockResponseUnprocessableNetwork withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public NetworkUnblockResponseUnprocessableNetwork withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public NetworkUnblockResponseUnprocessableNetworkInvalidParameters[] invalidParameters;
    public NetworkUnblockResponseUnprocessableNetwork withInvalidParameters(NetworkUnblockResponseUnprocessableNetworkInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public NetworkUnblockResponseUnprocessableNetwork withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NetworkUnblockResponseUnprocessableNetwork withType(String type) {
        this.type = type;
        return this;
    }
}