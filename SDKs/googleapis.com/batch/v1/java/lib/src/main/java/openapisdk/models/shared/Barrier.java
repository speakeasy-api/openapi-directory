package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Barrier
 * Barrier runnable blocks until all tasks in a taskgroup reach it.
**/
public class Barrier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Barrier withName(String name) {
        this.name = name;
        return this;
    }
}