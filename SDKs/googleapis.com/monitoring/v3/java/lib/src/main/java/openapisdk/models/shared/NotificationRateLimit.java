package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationRateLimit
 * Control over the rate of notifications sent to this alert policy's notification channels.
**/
public class NotificationRateLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public String period;
    public NotificationRateLimit withPeriod(String period) {
        this.period = period;
        return this;
    }
}