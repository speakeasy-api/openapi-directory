package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QosPolicy
 * QOS policy parameters.
**/
public class QosPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthGbps")
    public Double bandwidthGbps;
    public QosPolicy withBandwidthGbps(Double bandwidthGbps) {
        this.bandwidthGbps = bandwidthGbps;
        return this;
    }
}