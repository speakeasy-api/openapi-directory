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
    @JsonProperty("Description")
@SpeakeasyMetadata("form:name=Description")
    public String description;
    public TagInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
@SpeakeasyMetadata("form:name=Name")
    public String name;
    public TagInput withName(String name) {
        this.name = name;
        return this;
    }
}