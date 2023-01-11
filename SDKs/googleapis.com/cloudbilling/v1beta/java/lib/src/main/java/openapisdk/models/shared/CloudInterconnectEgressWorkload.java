package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudInterconnectEgressWorkload
 * The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
**/
public class CloudInterconnectEgressWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressRate")
    public Usage egressRate;
    public CloudInterconnectEgressWorkload withEgressRate(Usage egressRate) {
        this.egressRate = egressRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectConnectionLocation")
    public CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum interconnectConnectionLocation;
    public CloudInterconnectEgressWorkload withInterconnectConnectionLocation(CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum interconnectConnectionLocation) {
        this.interconnectConnectionLocation = interconnectConnectionLocation;
        return this;
    }
}