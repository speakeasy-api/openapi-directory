package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SemanticVersion
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
**/
public class SemanticVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorNumber")
    public Long majorNumber;
    public SemanticVersion withMajorNumber(Long majorNumber) {
        this.majorNumber = majorNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minorNumber")
    public Long minorNumber;
    public SemanticVersion withMinorNumber(Long minorNumber) {
        this.minorNumber = minorNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patch")
    public Long patch;
    public SemanticVersion withPatch(Long patch) {
        this.patch = patch;
        return this;
    }
}