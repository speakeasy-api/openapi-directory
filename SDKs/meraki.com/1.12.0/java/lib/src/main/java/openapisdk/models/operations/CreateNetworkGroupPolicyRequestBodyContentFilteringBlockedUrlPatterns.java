package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
 * Settings for blocked URL patterns
**/
public class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patterns")
    public String[] patterns;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns withPatterns(String[] patterns) {
        this.patterns = patterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns withSettings(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}