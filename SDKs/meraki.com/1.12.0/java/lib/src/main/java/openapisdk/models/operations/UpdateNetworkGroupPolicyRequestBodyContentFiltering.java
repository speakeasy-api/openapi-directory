package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyContentFiltering
 * The content filtering settings for your group policy
**/
public class UpdateNetworkGroupPolicyRequestBodyContentFiltering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUrlPatterns")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns allowedUrlPatterns;
    public UpdateNetworkGroupPolicyRequestBodyContentFiltering withAllowedUrlPatterns(UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns allowedUrlPatterns) {
        this.allowedUrlPatterns = allowedUrlPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlCategories")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories blockedUrlCategories;
    public UpdateNetworkGroupPolicyRequestBodyContentFiltering withBlockedUrlCategories(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories blockedUrlCategories) {
        this.blockedUrlCategories = blockedUrlCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlPatterns")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns blockedUrlPatterns;
    public UpdateNetworkGroupPolicyRequestBodyContentFiltering withBlockedUrlPatterns(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns blockedUrlPatterns) {
        this.blockedUrlPatterns = blockedUrlPatterns;
        return this;
    }
}