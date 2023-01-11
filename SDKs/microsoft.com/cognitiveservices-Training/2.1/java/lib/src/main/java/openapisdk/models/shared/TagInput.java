package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TagInput
 * Represents a Tag
**/
public class TagInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
@SpeakeasyMetadata("form:name=description")
    public String description;
    public TagInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public TagInput withName(String name) {
        this.name = name;
        return this;
    }
}