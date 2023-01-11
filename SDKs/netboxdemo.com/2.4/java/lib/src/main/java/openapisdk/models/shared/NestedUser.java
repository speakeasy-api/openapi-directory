package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public NestedUser withUsername(String username) {
        this.username = username;
        return this;
    }
}