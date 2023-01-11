package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatedBy
 * User that created the object
**/
public class CreatedBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreatedBy withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreatedBy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreatedBy withName(String name) {
        this.name = name;
        return this;
    }
}