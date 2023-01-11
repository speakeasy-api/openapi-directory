package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFloatingIps201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostFloatingIps201ApplicationJsonAction action;
    public PostFloatingIps201ApplicationJson withAction(PostFloatingIps201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("floating_ip")
    public PostFloatingIps201ApplicationJsonFloatingIp floatingIp;
    public PostFloatingIps201ApplicationJson withFloatingIp(PostFloatingIps201ApplicationJsonFloatingIp floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}