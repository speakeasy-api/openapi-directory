package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Gender
 * A person's gender.
**/
public class Gender {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressMeAs")
    public String addressMeAs;
    public Gender withAddressMeAs(String addressMeAs) {
        this.addressMeAs = addressMeAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public Gender withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Gender withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Gender withValue(String value) {
        this.value = value;
        return this;
    }
}