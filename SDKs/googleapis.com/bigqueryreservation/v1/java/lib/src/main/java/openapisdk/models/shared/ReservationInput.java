package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReservationInput
 * A reservation is a mechanism used to guarantee slots to users.
**/
public class ReservationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrency")
    public String concurrency;
    public ReservationInput withConcurrency(String concurrency) {
        this.concurrency = concurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreIdleSlots")
    public Boolean ignoreIdleSlots;
    public ReservationInput withIgnoreIdleSlots(Boolean ignoreIdleSlots) {
        this.ignoreIdleSlots = ignoreIdleSlots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiRegionAuxiliary")
    public Boolean multiRegionAuxiliary;
    public ReservationInput withMultiRegionAuxiliary(Boolean multiRegionAuxiliary) {
        this.multiRegionAuxiliary = multiRegionAuxiliary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReservationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotCapacity")
    public String slotCapacity;
    public ReservationInput withSlotCapacity(String slotCapacity) {
        this.slotCapacity = slotCapacity;
        return this;
    }
}