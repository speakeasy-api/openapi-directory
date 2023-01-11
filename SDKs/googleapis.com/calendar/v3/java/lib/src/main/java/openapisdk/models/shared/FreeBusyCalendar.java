package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FreeBusyCalendar
 * Free/busy expansions for a single calendar.
**/
public class FreeBusyCalendar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("busy")
    public TimePeriod[] busy;
    public FreeBusyCalendar withBusy(TimePeriod[] busy) {
        this.busy = busy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public FreeBusyCalendar withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
}