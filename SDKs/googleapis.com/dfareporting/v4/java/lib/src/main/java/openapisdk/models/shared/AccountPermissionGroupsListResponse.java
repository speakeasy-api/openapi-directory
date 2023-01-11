package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPermissionGroupsListResponse
 * Account Permission Group List Response
**/
public class AccountPermissionGroupsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountPermissionGroups")
    public AccountPermissionGroup[] accountPermissionGroups;
    public AccountPermissionGroupsListResponse withAccountPermissionGroups(AccountPermissionGroup[] accountPermissionGroups) {
        this.accountPermissionGroups = accountPermissionGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountPermissionGroupsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}