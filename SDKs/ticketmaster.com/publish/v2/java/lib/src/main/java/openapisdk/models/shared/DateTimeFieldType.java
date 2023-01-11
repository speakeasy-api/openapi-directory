package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DateTimeFieldType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationType")
    public DurationFieldType durationType;
    public DateTimeFieldType withDurationType(DurationFieldType durationType) {
        this.durationType = durationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DateTimeFieldType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangeDurationType")
    public DurationFieldType rangeDurationType;
    public DateTimeFieldType withRangeDurationType(DurationFieldType rangeDurationType) {
        this.rangeDurationType = rangeDurationType;
        return this;
    }
}