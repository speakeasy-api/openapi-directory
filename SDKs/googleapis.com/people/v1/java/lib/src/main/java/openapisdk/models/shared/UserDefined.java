package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDefined
 * Arbitrary user data that is populated by the end users.
**/
public class UserDefined {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public UserDefined withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public UserDefined withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UserDefined withValue(String value) {
        this.value = value;
        return this;
    }
}