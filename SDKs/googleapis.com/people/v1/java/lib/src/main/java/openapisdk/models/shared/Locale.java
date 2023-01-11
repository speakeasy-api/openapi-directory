package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Locale
 * A person's locale preference.
**/
public class Locale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Locale withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Locale withValue(String value) {
        this.value = value;
        return this;
    }
}