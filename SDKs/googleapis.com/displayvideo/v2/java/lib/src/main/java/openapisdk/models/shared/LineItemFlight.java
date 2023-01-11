package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemFlight
 * Settings that control the active duration of a line item.
**/
public class LineItemFlight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public LineItemFlight withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightDateType")
    public LineItemFlightFlightDateTypeEnum flightDateType;
    public LineItemFlight withFlightDateType(LineItemFlightFlightDateTypeEnum flightDateType) {
        this.flightDateType = flightDateType;
        return this;
    }
}