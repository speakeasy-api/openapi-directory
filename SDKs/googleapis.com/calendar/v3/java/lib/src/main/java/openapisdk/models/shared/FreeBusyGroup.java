package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FreeBusyGroup
 * List of calendars that are members of this group.
**/
public class FreeBusyGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendars")
    public String[] calendars;
    public FreeBusyGroup withCalendars(String[] calendars) {
        this.calendars = calendars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public FreeBusyGroup withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
}