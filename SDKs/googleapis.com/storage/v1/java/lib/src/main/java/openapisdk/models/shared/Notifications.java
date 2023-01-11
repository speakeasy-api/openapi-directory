package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notifications
 * A list of notification subscriptions.
**/
public class Notifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Notification[] items;
    public Notifications withItems(Notification[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Notifications withKind(String kind) {
        this.kind = kind;
        return this;
    }
}