package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebAsset
 * Describes a web asset.
**/
public class WebAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public WebAsset withSite(String site) {
        this.site = site;
        return this;
    }
}