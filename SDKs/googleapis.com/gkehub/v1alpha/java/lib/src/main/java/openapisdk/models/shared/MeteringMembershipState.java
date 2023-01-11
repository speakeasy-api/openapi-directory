package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeteringMembershipState
 * **Metering**: Per-Membership Feature State.
**/
public class MeteringMembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastMeasurementTime")
    public String lastMeasurementTime;
    public MeteringMembershipState withLastMeasurementTime(String lastMeasurementTime) {
        this.lastMeasurementTime = lastMeasurementTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preciseLastMeasuredClusterVcpuCapacity")
    public Float preciseLastMeasuredClusterVcpuCapacity;
    public MeteringMembershipState withPreciseLastMeasuredClusterVcpuCapacity(Float preciseLastMeasuredClusterVcpuCapacity) {
        this.preciseLastMeasuredClusterVcpuCapacity = preciseLastMeasuredClusterVcpuCapacity;
        return this;
    }
}