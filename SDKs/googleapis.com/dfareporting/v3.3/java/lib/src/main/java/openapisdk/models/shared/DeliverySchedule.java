package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliverySchedule
 * Delivery Schedule.
**/
public class DeliverySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap frequencyCap;
    public DeliverySchedule withFrequencyCap(FrequencyCap frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardCutoff")
    public Boolean hardCutoff;
    public DeliverySchedule withHardCutoff(Boolean hardCutoff) {
        this.hardCutoff = hardCutoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionRatio")
    public String impressionRatio;
    public DeliverySchedule withImpressionRatio(String impressionRatio) {
        this.impressionRatio = impressionRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public DeliverySchedulePriorityEnum priority;
    public DeliverySchedule withPriority(DeliverySchedulePriorityEnum priority) {
        this.priority = priority;
        return this;
    }
}