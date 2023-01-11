package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallRequestApplyTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostFirewallsCreateFirewallRequestApplyToLabelSelector labelSelector;
    public PostFirewallsCreateFirewallRequestApplyTo withLabelSelector(PostFirewallsCreateFirewallRequestApplyToLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostFirewallsCreateFirewallRequestApplyToServer server;
    public PostFirewallsCreateFirewallRequestApplyTo withServer(PostFirewallsCreateFirewallRequestApplyToServer server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostFirewallsCreateFirewallRequestApplyToTypeEnum type;
    public PostFirewallsCreateFirewallRequestApplyTo withType(PostFirewallsCreateFirewallRequestApplyToTypeEnum type) {
        this.type = type;
        return this;
    }
}