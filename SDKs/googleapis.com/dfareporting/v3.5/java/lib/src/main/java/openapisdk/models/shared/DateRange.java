package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateRange
 * Represents a date range.
**/
public class DateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public DateRange withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DateRange withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeDateRange")
    public DateRangeRelativeDateRangeEnum relativeDateRange;
    public DateRange withRelativeDateRange(DateRangeRelativeDateRangeEnum relativeDateRange) {
        this.relativeDateRange = relativeDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public DateRange withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}