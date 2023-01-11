package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSnmpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public UpdateNetworkSnmpRequestBodyAccessEnum access;
    public UpdateNetworkSnmpRequestBody withAccess(UpdateNetworkSnmpRequestBodyAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communityString")
    public String communityString;
    public UpdateNetworkSnmpRequestBody withCommunityString(String communityString) {
        this.communityString = communityString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public UpdateNetworkSnmpRequestBodyUsers[] users;
    public UpdateNetworkSnmpRequestBody withUsers(UpdateNetworkSnmpRequestBodyUsers[] users) {
        this.users = users;
        return this;
    }
}