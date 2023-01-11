package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActingUser
 * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
**/
public class ActingUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ActingUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public ActingUser withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
}