package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKeyConfig
 * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
**/
public class CryptoKeyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyReference")
    public String keyReference;
    public CryptoKeyConfig withKeyReference(String keyReference) {
        this.keyReference = keyReference;
        return this;
    }
}