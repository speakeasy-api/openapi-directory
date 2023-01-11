package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LocalJwtVerifier
 * A JWT verifier used only for the current service descriptor
**/
public class LocalJwtVerifier {
    @JsonProperty("algoSettings")
    public Object algoSettings;
    public LocalJwtVerifier withAlgoSettings(Object algoSettings) {
        this.algoSettings = algoSettings;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public LocalJwtVerifier withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("source")
    public Object source;
    public LocalJwtVerifier withSource(Object source) {
        this.source = source;
        return this;
    }
    @JsonProperty("strategy")
    public Object strategy;
    public LocalJwtVerifier withStrategy(Object strategy) {
        this.strategy = strategy;
        return this;
    }
    @JsonProperty("strict")
    public Boolean strict;
    public LocalJwtVerifier withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LocalJwtVerifier withType(String type) {
        this.type = type;
        return this;
    }
}