package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
 * Settings for allowed URL patterns
**/
public class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patterns")
    public String[] patterns;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns withPatterns(String[] patterns) {
        this.patterns = patterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns withSettings(CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}