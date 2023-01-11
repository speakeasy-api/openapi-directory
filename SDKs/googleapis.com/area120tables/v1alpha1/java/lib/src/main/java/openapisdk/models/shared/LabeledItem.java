package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabeledItem
 * A single item in a labeled column.
**/
public class LabeledItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LabeledItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LabeledItem withName(String name) {
        this.name = name;
        return this;
    }
}