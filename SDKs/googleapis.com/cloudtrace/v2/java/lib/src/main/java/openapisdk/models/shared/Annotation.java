package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Annotation
 * Text annotation with a set of attributes.
**/
public class Annotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attributes attributes;
    public Annotation withAttributes(Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public TruncatableString description;
    public Annotation withDescription(TruncatableString description) {
        this.description = description;
        return this;
    }
}