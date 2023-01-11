package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewMarketplaceInstalledAddOnInstalledAddOnExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed_add_on_sid")
    public String installedAddOnSid;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withInstalledAddOnSid(String installedAddOnSid) {
        this.installedAddOnSid = installedAddOnSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_name")
    public String productName;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewMarketplaceInstalledAddOnInstalledAddOnExtension withUrl(String url) {
        this.url = url;
        return this;
    }
}