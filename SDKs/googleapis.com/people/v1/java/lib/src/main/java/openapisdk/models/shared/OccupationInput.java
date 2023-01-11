package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OccupationInput
 * A person's occupation.
**/
public class OccupationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public OccupationInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public OccupationInput withValue(String value) {
        this.value = value;
        return this;
    }
}