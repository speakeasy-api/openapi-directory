package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TagInput
 * Represents a Tag.
**/
public class TagInput {
    @JsonProperty("description")
@SpeakeasyMetadata("form:name=description")
    public String description;
    public TagInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public TagInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
@SpeakeasyMetadata("form:name=type")
    public TagTypeEnum type;
    public TagInput withType(TagTypeEnum type) {
        this.type = type;
        return this;
    }
}