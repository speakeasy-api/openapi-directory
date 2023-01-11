package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentInstanceFilterInventory
 * VM inventory details.
**/
public class OsPolicyAssignmentInstanceFilterInventory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osShortName")
    public String osShortName;
    public OsPolicyAssignmentInstanceFilterInventory withOsShortName(String osShortName) {
        this.osShortName = osShortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public OsPolicyAssignmentInstanceFilterInventory withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
}