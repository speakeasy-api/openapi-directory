package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyContentFiltering
 * The content filtering settings for your group policy
**/
public class CreateNetworkGroupPolicyRequestBodyContentFiltering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUrlPatterns")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns allowedUrlPatterns;
    public CreateNetworkGroupPolicyRequestBodyContentFiltering withAllowedUrlPatterns(CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns allowedUrlPatterns) {
        this.allowedUrlPatterns = allowedUrlPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlCategories")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories blockedUrlCategories;
    public CreateNetworkGroupPolicyRequestBodyContentFiltering withBlockedUrlCategories(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories blockedUrlCategories) {
        this.blockedUrlCategories = blockedUrlCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlPatterns")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns blockedUrlPatterns;
    public CreateNetworkGroupPolicyRequestBodyContentFiltering withBlockedUrlPatterns(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns blockedUrlPatterns) {
        this.blockedUrlPatterns = blockedUrlPatterns;
        return this;
    }
}