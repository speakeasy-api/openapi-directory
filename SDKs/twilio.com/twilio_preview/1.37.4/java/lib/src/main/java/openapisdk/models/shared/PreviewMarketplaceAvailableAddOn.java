package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewMarketplaceAvailableAddOn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration_schema")
    public Object configurationSchema;
    public PreviewMarketplaceAvailableAddOn withConfigurationSchema(Object configurationSchema) {
        this.configurationSchema = configurationSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PreviewMarketplaceAvailableAddOn withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewMarketplaceAvailableAddOn withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public PreviewMarketplaceAvailableAddOn withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing_type")
    public String pricingType;
    public PreviewMarketplaceAvailableAddOn withPricingType(String pricingType) {
        this.pricingType = pricingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewMarketplaceAvailableAddOn withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewMarketplaceAvailableAddOn withUrl(String url) {
        this.url = url;
        return this;
    }
}