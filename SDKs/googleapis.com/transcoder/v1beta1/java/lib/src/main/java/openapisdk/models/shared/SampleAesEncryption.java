package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SampleAesEncryption
 * Configuration for SAMPLE-AES encryption.
**/
public class SampleAesEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyUri")
    public String keyUri;
    public SampleAesEncryption withKeyUri(String keyUri) {
        this.keyUri = keyUri;
        return this;
    }
}