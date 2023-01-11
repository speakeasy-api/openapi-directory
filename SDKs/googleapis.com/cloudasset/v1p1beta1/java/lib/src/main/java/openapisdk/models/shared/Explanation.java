package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Explanation
 * Explanation about the IAM policy search result.
**/
public class Explanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedPermissions")
    public java.util.Map<String, Permissions> matchedPermissions;
    public Explanation withMatchedPermissions(java.util.Map<String, Permissions> matchedPermissions) {
        this.matchedPermissions = matchedPermissions;
        return this;
    }
}