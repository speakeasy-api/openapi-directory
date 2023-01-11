package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayorEmailOptOutRequest {
    @JsonProperty("reminderEmailsOptOut")
    public Boolean reminderEmailsOptOut;
    public PayorEmailOptOutRequest withReminderEmailsOptOut(Boolean reminderEmailsOptOut) {
        this.reminderEmailsOptOut = reminderEmailsOptOut;
        return this;
    }
}