package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codename")
    public String codename;
    public Version withCodename(String codename) {
        this.codename = codename;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public Version withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_beta")
    public Boolean isBeta;
    public Version withIsBeta(Boolean isBeta) {
        this.isBeta = isBeta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_deprecated")
    public Boolean isDeprecated;
    public Version withIsDeprecated(Boolean isDeprecated) {
        this.isDeprecated = isDeprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_hidden")
    public Boolean isHidden;
    public Version withIsHidden(Boolean isHidden) {
        this.isHidden = isHidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_stable")
    public Boolean isStable;
    public Version withIsStable(Boolean isStable) {
        this.isStable = isStable;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public Version withVersion(String version) {
        this.version = version;
        return this;
    }
}