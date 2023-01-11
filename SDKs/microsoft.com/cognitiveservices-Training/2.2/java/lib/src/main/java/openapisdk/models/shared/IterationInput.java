package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * IterationInput
 * Iteration model to be sent over JSON.
**/
public class IterationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
@SpeakeasyMetadata("form:name=isDefault")
    public Boolean isDefault;
    public IterationInput withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public IterationInput withName(String name) {
        this.name = name;
        return this;
    }
}