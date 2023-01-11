package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationshipStatus
 * **DEPRECATED**: No data will be returned A person's relationship status.
**/
public class RelationshipStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public RelationshipStatus withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public RelationshipStatus withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public RelationshipStatus withValue(String value) {
        this.value = value;
        return this;
    }
}