package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
 * Settings for blocked URL categories
**/
public class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories withSettings(CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}