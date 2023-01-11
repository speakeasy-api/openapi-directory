package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aws
 * Represents an Amazon Web Services identity provider.
**/
public class Aws {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Aws withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}