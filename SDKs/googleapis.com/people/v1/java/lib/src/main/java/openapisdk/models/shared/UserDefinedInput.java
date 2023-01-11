package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDefinedInput
 * Arbitrary user data that is populated by the end users.
**/
public class UserDefinedInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public UserDefinedInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public UserDefinedInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UserDefinedInput withValue(String value) {
        this.value = value;
        return this;
    }
}