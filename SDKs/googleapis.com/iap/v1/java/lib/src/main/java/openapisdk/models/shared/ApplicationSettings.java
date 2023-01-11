package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationSettings
 * Wrapper over application specific settings for IAP.
**/
public class ApplicationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDeniedPageSettings")
    public AccessDeniedPageSettings accessDeniedPageSettings;
    public ApplicationSettings withAccessDeniedPageSettings(AccessDeniedPageSettings accessDeniedPageSettings) {
        this.accessDeniedPageSettings = accessDeniedPageSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePropagationSettings")
    public AttributePropagationSettings attributePropagationSettings;
    public ApplicationSettings withAttributePropagationSettings(AttributePropagationSettings attributePropagationSettings) {
        this.attributePropagationSettings = attributePropagationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieDomain")
    public String cookieDomain;
    public ApplicationSettings withCookieDomain(String cookieDomain) {
        this.cookieDomain = cookieDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csmSettings")
    public CsmSettings csmSettings;
    public ApplicationSettings withCsmSettings(CsmSettings csmSettings) {
        this.csmSettings = csmSettings;
        return this;
    }
}