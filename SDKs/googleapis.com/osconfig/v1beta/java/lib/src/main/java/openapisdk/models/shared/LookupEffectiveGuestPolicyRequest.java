package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupEffectiveGuestPolicyRequest
 * A request message for getting the effective guest policy assigned to the instance.
**/
public class LookupEffectiveGuestPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osArchitecture")
    public String osArchitecture;
    public LookupEffectiveGuestPolicyRequest withOsArchitecture(String osArchitecture) {
        this.osArchitecture = osArchitecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osShortName")
    public String osShortName;
    public LookupEffectiveGuestPolicyRequest withOsShortName(String osShortName) {
        this.osShortName = osShortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public LookupEffectiveGuestPolicyRequest withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
}