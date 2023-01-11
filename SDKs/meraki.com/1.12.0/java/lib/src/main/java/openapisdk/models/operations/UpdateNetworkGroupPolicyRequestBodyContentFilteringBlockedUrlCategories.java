package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
 * Settings for blocked URL categories
**/
public class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories withSettings(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}