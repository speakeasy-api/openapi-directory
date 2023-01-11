package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllocationPolicy
 * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
**/
public class AllocationPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public InstancePolicyOrTemplate[] instances;
    public AllocationPolicy withInstances(InstancePolicyOrTemplate[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AllocationPolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public LocationPolicy location;
    public AllocationPolicy withLocation(LocationPolicy location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public NetworkPolicy network;
    public AllocationPolicy withNetwork(NetworkPolicy network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccount serviceAccount;
    public AllocationPolicy withServiceAccount(ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
}