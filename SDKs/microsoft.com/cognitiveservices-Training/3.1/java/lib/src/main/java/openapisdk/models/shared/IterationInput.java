package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * IterationInput
 * Iteration model to be sent over JSON.
**/
public class IterationInput {
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public IterationInput withName(String name) {
        this.name = name;
        return this;
    }
}