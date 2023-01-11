package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateDetails
 * Details about a date column.
**/
public class DateDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasTime")
    public Boolean hasTime;
    public DateDetails withHasTime(Boolean hasTime) {
        this.hasTime = hasTime;
        return this;
    }
}