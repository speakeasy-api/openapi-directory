package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPermissionsListResponse
 * Account Permission List Response
**/
public class AccountPermissionsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountPermissions")
    public AccountPermission[] accountPermissions;
    public AccountPermissionsListResponse withAccountPermissions(AccountPermission[] accountPermissions) {
        this.accountPermissions = accountPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountPermissionsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}