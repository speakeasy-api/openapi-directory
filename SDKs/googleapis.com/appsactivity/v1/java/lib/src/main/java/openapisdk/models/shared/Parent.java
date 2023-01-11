package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Parent
 * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
**/
public class Parent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Parent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRoot")
    public Boolean isRoot;
    public Parent withIsRoot(Boolean isRoot) {
        this.isRoot = isRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Parent withTitle(String title) {
        this.title = title;
        return this;
    }
}