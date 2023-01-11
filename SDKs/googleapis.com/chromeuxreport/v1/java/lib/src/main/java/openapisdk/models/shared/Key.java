package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Key
 * Key defines all the dimensions that identify this record as unique.
**/
public class Key {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveConnectionType")
    public String effectiveConnectionType;
    public Key withEffectiveConnectionType(String effectiveConnectionType) {
        this.effectiveConnectionType = effectiveConnectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public KeyFormFactorEnum formFactor;
    public Key withFormFactor(KeyFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public Key withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Key withUrl(String url) {
        this.url = url;
        return this;
    }
}