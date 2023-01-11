package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyInventoryFilter
 * Filtering criteria to select VMs based on inventory details.
**/
public class OsPolicyInventoryFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osShortName")
    public String osShortName;
    public OsPolicyInventoryFilter withOsShortName(String osShortName) {
        this.osShortName = osShortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public OsPolicyInventoryFilter withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
}