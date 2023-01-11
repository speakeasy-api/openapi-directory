package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2IosKeyRestrictions
 * The iOS apps that are allowed to use the key.
**/
public class V2IosKeyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedBundleIds")
    public String[] allowedBundleIds;
    public V2IosKeyRestrictions withAllowedBundleIds(String[] allowedBundleIds) {
        this.allowedBundleIds = allowedBundleIds;
        return this;
    }
}