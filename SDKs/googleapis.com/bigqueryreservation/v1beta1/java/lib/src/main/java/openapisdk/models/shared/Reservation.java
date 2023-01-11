package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Reservation
 * A reservation is a mechanism used to guarantee slots to users.
**/
public class Reservation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrency")
    public String concurrency;
    public Reservation withConcurrency(String concurrency) {
        this.concurrency = concurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Reservation withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreIdleSlots")
    public Boolean ignoreIdleSlots;
    public Reservation withIgnoreIdleSlots(Boolean ignoreIdleSlots) {
        this.ignoreIdleSlots = ignoreIdleSlots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiRegionAuxiliary")
    public Boolean multiRegionAuxiliary;
    public Reservation withMultiRegionAuxiliary(Boolean multiRegionAuxiliary) {
        this.multiRegionAuxiliary = multiRegionAuxiliary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Reservation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotCapacity")
    public String slotCapacity;
    public Reservation withSlotCapacity(String slotCapacity) {
        this.slotCapacity = slotCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Reservation withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}