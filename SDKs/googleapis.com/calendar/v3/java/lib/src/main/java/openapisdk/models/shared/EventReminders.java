package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventReminders
 * Information about the event's reminders for the authenticated user.
**/
public class EventReminders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrides")
    public EventReminder[] overrides;
    public EventReminders withOverrides(EventReminder[] overrides) {
        this.overrides = overrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefault")
    public Boolean useDefault;
    public EventReminders withUseDefault(Boolean useDefault) {
        this.useDefault = useDefault;
        return this;
    }
}