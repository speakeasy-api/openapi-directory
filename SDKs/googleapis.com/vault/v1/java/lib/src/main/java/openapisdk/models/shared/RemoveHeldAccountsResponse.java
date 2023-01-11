package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveHeldAccountsResponse
 * Response for batch delete held accounts.
**/
public class RemoveHeldAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public Status[] statuses;
    public RemoveHeldAccountsResponse withStatuses(Status[] statuses) {
        this.statuses = statuses;
        return this;
    }
}