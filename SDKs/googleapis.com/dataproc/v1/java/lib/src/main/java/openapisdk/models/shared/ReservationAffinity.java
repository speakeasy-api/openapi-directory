package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReservationAffinity
 * Reservation Affinity for consuming Zonal reservation.
**/
public class ReservationAffinity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumeReservationType")
    public ReservationAffinityConsumeReservationTypeEnum consumeReservationType;
    public ReservationAffinity withConsumeReservationType(ReservationAffinityConsumeReservationTypeEnum consumeReservationType) {
        this.consumeReservationType = consumeReservationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ReservationAffinity withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ReservationAffinity withValues(String[] values) {
        this.values = values;
        return this;
    }
}