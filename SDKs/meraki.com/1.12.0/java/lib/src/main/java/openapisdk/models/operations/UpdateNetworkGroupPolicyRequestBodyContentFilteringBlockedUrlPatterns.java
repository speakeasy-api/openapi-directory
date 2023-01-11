package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
 * Settings for blocked URL patterns
**/
public class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patterns")
    public String[] patterns;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns withPatterns(String[] patterns) {
        this.patterns = patterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns withSettings(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}