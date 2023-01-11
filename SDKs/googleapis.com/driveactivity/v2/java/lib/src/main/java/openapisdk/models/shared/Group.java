package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Group
 * Information about a group.
**/
public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Group withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Group withTitle(String title) {
        this.title = title;
        return this;
    }
}