package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaySchedulePaySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public PaySchedulePaySchedule withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public PaySchedulePaySchedule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public PaySchedulePaySchedulePayFrequencyEnum payFrequency;
    public PaySchedulePaySchedule withPayFrequency(PaySchedulePaySchedulePayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
}