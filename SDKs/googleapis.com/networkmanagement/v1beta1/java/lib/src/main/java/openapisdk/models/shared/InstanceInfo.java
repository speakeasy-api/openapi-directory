package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInfo
 * For display only. Metadata associated with a Compute Engine instance.
**/
public class InstanceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InstanceInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIp")
    public String externalIp;
    public InstanceInfo withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public InstanceInfo withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIp")
    public String internalIp;
    public InstanceInfo withInternalIp(String internalIp) {
        this.internalIp = internalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public InstanceInfo withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public InstanceInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public InstanceInfo withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public InstanceInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}