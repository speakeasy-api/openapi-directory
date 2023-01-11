package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientDataInput
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
public class ClientDataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ClientDataInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public ClientDataInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ClientDataInput withValue(String value) {
        this.value = value;
        return this;
    }
}