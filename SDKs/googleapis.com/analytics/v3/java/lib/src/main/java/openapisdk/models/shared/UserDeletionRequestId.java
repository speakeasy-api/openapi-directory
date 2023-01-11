package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDeletionRequestId
 * User ID.
**/
public class UserDeletionRequestId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UserDeletionRequestId withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public UserDeletionRequestId withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}