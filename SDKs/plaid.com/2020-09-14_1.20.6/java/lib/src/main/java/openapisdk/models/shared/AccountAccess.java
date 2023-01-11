package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountAccess
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
**/
public class AccountAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized")
    public Boolean authorized;
    public AccountAccess withAuthorized(Boolean authorized) {
        this.authorized = authorized;
        return this;
    }
    @JsonProperty("unique_id")
    public String uniqueId;
    public AccountAccess withUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    }
}