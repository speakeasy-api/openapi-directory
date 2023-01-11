package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagKeyInput
 * A TagKey, used to group a set of TagValues.
**/
public class TagKeyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TagKeyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public TagKeyInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagKeyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public TagKeyInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public TagKeyPurposeEnum purpose;
    public TagKeyInput withPurpose(TagKeyPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeData")
    public java.util.Map<String, String> purposeData;
    public TagKeyInput withPurposeData(java.util.Map<String, String> purposeData) {
        this.purposeData = purposeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortName")
    public String shortName;
    public TagKeyInput withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}