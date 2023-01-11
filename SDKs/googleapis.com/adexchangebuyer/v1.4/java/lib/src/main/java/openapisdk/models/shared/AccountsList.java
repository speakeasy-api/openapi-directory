package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsList
 * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
**/
public class AccountsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Account[] items;
    public AccountsList withItems(Account[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountsList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}