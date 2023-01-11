package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRef
 * JSON template for a user reference.
**/
public class UserRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserRef withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserRef withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserRef withKind(String kind) {
        this.kind = kind;
        return this;
    }
}