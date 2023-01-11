package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewMarketplaceAvailableAddOnAvailableAddOnExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_add_on_sid")
    public String availableAddOnSid;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withAvailableAddOnSid(String availableAddOnSid) {
        this.availableAddOnSid = availableAddOnSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_name")
    public String productName;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewMarketplaceAvailableAddOnAvailableAddOnExtension withUrl(String url) {
        this.url = url;
        return this;
    }
}