package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryKey")
    public String primaryKey;
    public KeyPair withPrimaryKey(String primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryKey")
    public String secondaryKey;
    public KeyPair withSecondaryKey(String secondaryKey) {
        this.secondaryKey = secondaryKey;
        return this;
    }
}