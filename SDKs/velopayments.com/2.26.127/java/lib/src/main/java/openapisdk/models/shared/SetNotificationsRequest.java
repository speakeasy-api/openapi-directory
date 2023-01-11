package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetNotificationsRequest {
    @JsonProperty("minimumBalance")
    public Long minimumBalance;
    public SetNotificationsRequest withMinimumBalance(Long minimumBalance) {
        this.minimumBalance = minimumBalance;
        return this;
    }
}