package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceReference
 * A reference to a Compute Engine instance.
**/
public class InstanceReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public InstanceReference withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public InstanceReference withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicEciesKey")
    public String publicEciesKey;
    public InstanceReference withPublicEciesKey(String publicEciesKey) {
        this.publicEciesKey = publicEciesKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public InstanceReference withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}