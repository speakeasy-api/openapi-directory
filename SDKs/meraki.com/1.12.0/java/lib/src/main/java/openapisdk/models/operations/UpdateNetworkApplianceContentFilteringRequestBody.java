package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceContentFilteringRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUrlPatterns")
    public String[] allowedUrlPatterns;
    public UpdateNetworkApplianceContentFilteringRequestBody withAllowedUrlPatterns(String[] allowedUrlPatterns) {
        this.allowedUrlPatterns = allowedUrlPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlCategories")
    public String[] blockedUrlCategories;
    public UpdateNetworkApplianceContentFilteringRequestBody withBlockedUrlCategories(String[] blockedUrlCategories) {
        this.blockedUrlCategories = blockedUrlCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedUrlPatterns")
    public String[] blockedUrlPatterns;
    public UpdateNetworkApplianceContentFilteringRequestBody withBlockedUrlPatterns(String[] blockedUrlPatterns) {
        this.blockedUrlPatterns = blockedUrlPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlCategoryListSize")
    public UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum urlCategoryListSize;
    public UpdateNetworkApplianceContentFilteringRequestBody withUrlCategoryListSize(UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum urlCategoryListSize) {
        this.urlCategoryListSize = urlCategoryListSize;
        return this;
    }
}