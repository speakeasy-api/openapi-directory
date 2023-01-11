package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Category
 * Represents the category hierarchy of a SKU.
**/
public class Category {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceFamily")
    public String resourceFamily;
    public Category withResourceFamily(String resourceFamily) {
        this.resourceFamily = resourceFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroup")
    public String resourceGroup;
    public Category withResourceGroup(String resourceGroup) {
        this.resourceGroup = resourceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDisplayName")
    public String serviceDisplayName;
    public Category withServiceDisplayName(String serviceDisplayName) {
        this.serviceDisplayName = serviceDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageType")
    public String usageType;
    public Category withUsageType(String usageType) {
        this.usageType = usageType;
        return this;
    }
}