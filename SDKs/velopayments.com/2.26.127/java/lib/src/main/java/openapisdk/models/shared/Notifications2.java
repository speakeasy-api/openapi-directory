package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Notifications2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumBalance")
    public Long minimumBalance;
    public Notifications2 withMinimumBalance(Long minimumBalance) {
        this.minimumBalance = minimumBalance;
        return this;
    }
}