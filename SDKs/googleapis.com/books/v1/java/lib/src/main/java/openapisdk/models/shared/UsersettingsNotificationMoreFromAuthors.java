package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersettingsNotificationMoreFromAuthors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opted_state")
    public String optedState;
    public UsersettingsNotificationMoreFromAuthors withOptedState(String optedState) {
        this.optedState = optedState;
        return this;
    }
}