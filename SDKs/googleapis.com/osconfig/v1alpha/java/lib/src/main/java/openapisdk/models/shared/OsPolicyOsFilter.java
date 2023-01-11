package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyOsFilter
 * Filtering criteria to select VMs based on OS details.
**/
public class OsPolicyOsFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osShortName")
    public String osShortName;
    public OsPolicyOsFilter withOsShortName(String osShortName) {
        this.osShortName = osShortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public OsPolicyOsFilter withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
}