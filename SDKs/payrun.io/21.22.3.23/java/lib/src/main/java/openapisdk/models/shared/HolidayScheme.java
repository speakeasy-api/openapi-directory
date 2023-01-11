package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HolidayScheme {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HolidayScheme")
    public HolidaySchemeHolidayScheme holidayScheme;
    public HolidayScheme withHolidayScheme(HolidaySchemeHolidayScheme holidayScheme) {
        this.holidayScheme = holidayScheme;
        return this;
    }
}