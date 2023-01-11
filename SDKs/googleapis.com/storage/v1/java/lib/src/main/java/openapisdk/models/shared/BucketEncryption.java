package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketEncryption
 * Encryption configuration for a bucket.
**/
public class BucketEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultKmsKeyName")
    public String defaultKmsKeyName;
    public BucketEncryption withDefaultKmsKeyName(String defaultKmsKeyName) {
        this.defaultKmsKeyName = defaultKmsKeyName;
        return this;
    }
}