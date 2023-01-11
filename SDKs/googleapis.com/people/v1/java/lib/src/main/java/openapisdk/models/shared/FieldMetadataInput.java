package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldMetadataInput
 * Metadata about a field.
**/
public class FieldMetadataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public SourceInput source;
    public FieldMetadataInput withSource(SourceInput source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePrimary")
    public Boolean sourcePrimary;
    public FieldMetadataInput withSourcePrimary(Boolean sourcePrimary) {
        this.sourcePrimary = sourcePrimary;
        return this;
    }
}