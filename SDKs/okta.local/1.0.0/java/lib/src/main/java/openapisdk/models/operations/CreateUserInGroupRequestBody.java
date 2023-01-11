package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserInGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupIds")
    public String[] groupIds;
    public CreateUserInGroupRequestBody withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public CreateUserInGroupRequestBodyProfile profile;
    public CreateUserInGroupRequestBody withProfile(CreateUserInGroupRequestBodyProfile profile) {
        this.profile = profile;
        return this;
    }
}