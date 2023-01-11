package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2AllowlistOnly
 * Defines a policy of only allowing regions by explicitly adding them to an allowlist.
**/
public class GoogleCloudIdentitytoolkitAdminV2AllowlistOnly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedRegions")
    public String[] allowedRegions;
    public GoogleCloudIdentitytoolkitAdminV2AllowlistOnly withAllowedRegions(String[] allowedRegions) {
        this.allowedRegions = allowedRegions;
        return this;
    }
}