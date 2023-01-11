package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialCategory
 * Name of an editorial category
**/
public class EditorialCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EditorialCategory withName(String name) {
        this.name = name;
        return this;
    }
}