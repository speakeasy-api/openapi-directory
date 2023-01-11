package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShippingsettingsGetSupportedHolidaysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holidays")
    public HolidaysHoliday[] holidays;
    public ShippingsettingsGetSupportedHolidaysResponse withHolidays(HolidaysHoliday[] holidays) {
        this.holidays = holidays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ShippingsettingsGetSupportedHolidaysResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}