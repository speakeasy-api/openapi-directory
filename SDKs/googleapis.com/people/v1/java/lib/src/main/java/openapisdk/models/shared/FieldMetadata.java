package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldMetadata
 * Metadata about a field.
**/
public class FieldMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public FieldMetadata withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public FieldMetadata withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePrimary")
    public Boolean sourcePrimary;
    public FieldMetadata withSourcePrimary(Boolean sourcePrimary) {
        this.sourcePrimary = sourcePrimary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public FieldMetadata withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}