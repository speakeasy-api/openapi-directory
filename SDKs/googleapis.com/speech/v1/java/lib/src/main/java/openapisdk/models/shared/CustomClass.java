package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomClass
 * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
**/
public class CustomClass {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClassId")
    public String customClassId;
    public CustomClass withCustomClassId(String customClassId) {
        this.customClassId = customClassId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ClassItem[] items;
    public CustomClass withItems(ClassItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomClass withName(String name) {
        this.name = name;
        return this;
    }
}