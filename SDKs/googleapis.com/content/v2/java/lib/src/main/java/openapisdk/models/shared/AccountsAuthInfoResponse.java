package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountsAuthInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIdentifiers")
    public AccountIdentifier[] accountIdentifiers;
    public AccountsAuthInfoResponse withAccountIdentifiers(AccountIdentifier[] accountIdentifiers) {
        this.accountIdentifiers = accountIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountsAuthInfoResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}