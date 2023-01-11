package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserGroupList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public UserGroupList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_groups")
    public UserGroup[] userGroups;
    public UserGroupList withUserGroups(UserGroup[] userGroups) {
        this.userGroups = userGroups;
        return this;
    }
}