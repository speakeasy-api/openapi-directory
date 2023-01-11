package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2AllowByDefault
 * Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
**/
public class GoogleCloudIdentitytoolkitAdminV2AllowByDefault {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowedRegions")
    public String[] disallowedRegions;
    public GoogleCloudIdentitytoolkitAdminV2AllowByDefault withDisallowedRegions(String[] disallowedRegions) {
        this.disallowedRegions = disallowedRegions;
        return this;
    }
}