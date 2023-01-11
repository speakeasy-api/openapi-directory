package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagValueInput
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
**/
public class TagValueInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TagValueInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public TagValueInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagValueInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public TagValueInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortName")
    public String shortName;
    public TagValueInput withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}