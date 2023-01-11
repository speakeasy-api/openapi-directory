package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneNumber
 * A person's phone number.
**/
public class PhoneNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalForm")
    public String canonicalForm;
    public PhoneNumber withCanonicalForm(String canonicalForm) {
        this.canonicalForm = canonicalForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedType")
    public String formattedType;
    public PhoneNumber withFormattedType(String formattedType) {
        this.formattedType = formattedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public PhoneNumber withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PhoneNumber withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PhoneNumber withValue(String value) {
        this.value = value;
        return this;
    }
}