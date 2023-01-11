package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponsePolicy
 * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
**/
public class ResponsePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ResponsePolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusters")
    public ResponsePolicyGkeCluster[] gkeClusters;
    public ResponsePolicy withGkeClusters(ResponsePolicyGkeCluster[] gkeClusters) {
        this.gkeClusters = gkeClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ResponsePolicy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ResponsePolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ResponsePolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public ResponsePolicyNetwork[] networks;
    public ResponsePolicy withNetworks(ResponsePolicyNetwork[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyName")
    public String responsePolicyName;
    public ResponsePolicy withResponsePolicyName(String responsePolicyName) {
        this.responsePolicyName = responsePolicyName;
        return this;
    }
}