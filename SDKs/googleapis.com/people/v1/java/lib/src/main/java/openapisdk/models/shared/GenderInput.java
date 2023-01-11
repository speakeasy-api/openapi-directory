package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenderInput
 * A person's gender.
**/
public class GenderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressMeAs")
    public String addressMeAs;
    public GenderInput withAddressMeAs(String addressMeAs) {
        this.addressMeAs = addressMeAs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public GenderInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GenderInput withValue(String value) {
        this.value = value;
        return this;
    }
}