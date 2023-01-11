package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimestampResConversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public TimestampResConversation withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyed")
    public String destroyed;
    public TimestampResConversation withDestroyed(String destroyed) {
        this.destroyed = destroyed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public TimestampResConversation withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}