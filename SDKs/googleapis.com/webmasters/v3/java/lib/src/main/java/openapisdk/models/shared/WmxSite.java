package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WmxSite
 * Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
**/
public class WmxSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionLevel")
    public String permissionLevel;
    public WmxSite withPermissionLevel(String permissionLevel) {
        this.permissionLevel = permissionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteUrl")
    public String siteUrl;
    public WmxSite withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}