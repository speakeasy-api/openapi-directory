package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdmissionWhitelistPattern
 * An admission allowlist pattern exempts images from checks by admission rules.
**/
public class AdmissionWhitelistPattern {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namePattern")
    public String namePattern;
    public AdmissionWhitelistPattern withNamePattern(String namePattern) {
        this.namePattern = namePattern;
        return this;
    }
}