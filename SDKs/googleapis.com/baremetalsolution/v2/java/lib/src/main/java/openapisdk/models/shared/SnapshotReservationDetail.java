package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnapshotReservationDetail
 * Details about snapshot space reservation and usage on the storage volume.
**/
public class SnapshotReservationDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedSpaceGib")
    public String reservedSpaceGib;
    public SnapshotReservationDetail withReservedSpaceGib(String reservedSpaceGib) {
        this.reservedSpaceGib = reservedSpaceGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedSpacePercent")
    public Integer reservedSpacePercent;
    public SnapshotReservationDetail withReservedSpacePercent(Integer reservedSpacePercent) {
        this.reservedSpacePercent = reservedSpacePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedSpaceRemainingGib")
    public String reservedSpaceRemainingGib;
    public SnapshotReservationDetail withReservedSpaceRemainingGib(String reservedSpaceRemainingGib) {
        this.reservedSpaceRemainingGib = reservedSpaceRemainingGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedSpaceUsedPercent")
    public Integer reservedSpaceUsedPercent;
    public SnapshotReservationDetail withReservedSpaceUsedPercent(Integer reservedSpaceUsedPercent) {
        this.reservedSpaceUsedPercent = reservedSpaceUsedPercent;
        return this;
    }
}