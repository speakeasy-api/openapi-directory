package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GlobalJwtVerifier
 * A JWT verifier used by multiple service descriptor
**/
public class GlobalJwtVerifier {
    @JsonProperty("algoSettings")
    public Object algoSettings;
    public GlobalJwtVerifier withAlgoSettings(Object algoSettings) {
        this.algoSettings = algoSettings;
        return this;
    }
    @JsonProperty("desc")
    public String desc;
    public GlobalJwtVerifier withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public GlobalJwtVerifier withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GlobalJwtVerifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GlobalJwtVerifier withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("source")
    public Object source;
    public GlobalJwtVerifier withSource(Object source) {
        this.source = source;
        return this;
    }
    @JsonProperty("strategy")
    public Object strategy;
    public GlobalJwtVerifier withStrategy(Object strategy) {
        this.strategy = strategy;
        return this;
    }
    @JsonProperty("strict")
    public Boolean strict;
    public GlobalJwtVerifier withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
}