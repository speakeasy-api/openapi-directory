package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessHoursUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fri")
    public BusinessHourInputModel fri;
    public BusinessHoursUpdateModel withFri(BusinessHourInputModel fri) {
        this.fri = fri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mon")
    public BusinessHourInputModel mon;
    public BusinessHoursUpdateModel withMon(BusinessHourInputModel mon) {
        this.mon = mon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sat")
    public BusinessHourInputModel sat;
    public BusinessHoursUpdateModel withSat(BusinessHourInputModel sat) {
        this.sat = sat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sun")
    public BusinessHourInputModel sun;
    public BusinessHoursUpdateModel withSun(BusinessHourInputModel sun) {
        this.sun = sun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thu")
    public BusinessHourInputModel thu;
    public BusinessHoursUpdateModel withThu(BusinessHourInputModel thu) {
        this.thu = thu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tue")
    public BusinessHourInputModel tue;
    public BusinessHoursUpdateModel withTue(BusinessHourInputModel tue) {
        this.tue = tue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wed")
    public BusinessHourInputModel wed;
    public BusinessHoursUpdateModel withWed(BusinessHourInputModel wed) {
        this.wed = wed;
        return this;
    }
}