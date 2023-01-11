package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParentReference
 * A reference to a file's parent.
**/
public class ParentReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ParentReference withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRoot")
    public Boolean isRoot;
    public ParentReference withIsRoot(Boolean isRoot) {
        this.isRoot = isRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ParentReference withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public String parentLink;
    public ParentReference withParentLink(String parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ParentReference withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}