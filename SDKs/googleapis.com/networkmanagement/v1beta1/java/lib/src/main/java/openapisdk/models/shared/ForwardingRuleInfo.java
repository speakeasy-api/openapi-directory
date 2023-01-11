package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForwardingRuleInfo
 * For display only. Metadata associated with a Compute Engine forwarding rule.
**/
public class ForwardingRuleInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ForwardingRuleInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedPortRange")
    public String matchedPortRange;
    public ForwardingRuleInfo withMatchedPortRange(String matchedPortRange) {
        this.matchedPortRange = matchedPortRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedProtocol")
    public String matchedProtocol;
    public ForwardingRuleInfo withMatchedProtocol(String matchedProtocol) {
        this.matchedProtocol = matchedProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public ForwardingRuleInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public ForwardingRuleInfo withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ForwardingRuleInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vip")
    public String vip;
    public ForwardingRuleInfo withVip(String vip) {
        this.vip = vip;
        return this;
    }
}