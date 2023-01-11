package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
 * Settings for allowed URL patterns
**/
public class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patterns")
    public String[] patterns;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns withPatterns(String[] patterns) {
        this.patterns = patterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns withSettings(UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}