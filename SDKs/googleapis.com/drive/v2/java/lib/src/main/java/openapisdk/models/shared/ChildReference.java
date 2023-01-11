package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChildReference
 * A reference to a folder's child.
**/
public class ChildReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childLink")
    public String childLink;
    public ChildReference withChildLink(String childLink) {
        this.childLink = childLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChildReference withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChildReference withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ChildReference withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}