package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceSettingsInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookAheadUnit")
    public Integer bookAheadUnit;
    public ServiceSettingsInputModel withBookAheadUnit(Integer bookAheadUnit) {
        this.bookAheadUnit = bookAheadUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookAheadValue")
    public Integer bookAheadValue;
    public ServiceSettingsInputModel withBookAheadValue(Integer bookAheadValue) {
        this.bookAheadValue = bookAheadValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookInAdvance")
    public Integer bookInAdvance;
    public ServiceSettingsInputModel withBookInAdvance(Integer bookInAdvance) {
        this.bookInAdvance = bookInAdvance;
        return this;
    }
}