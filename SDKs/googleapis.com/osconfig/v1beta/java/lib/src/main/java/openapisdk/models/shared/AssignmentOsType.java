package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentOsType
 * Defines the criteria for selecting VM Instances by OS type.
**/
public class AssignmentOsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osArchitecture")
    public String osArchitecture;
    public AssignmentOsType withOsArchitecture(String osArchitecture) {
        this.osArchitecture = osArchitecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osShortName")
    public String osShortName;
    public AssignmentOsType withOsShortName(String osShortName) {
        this.osShortName = osShortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public AssignmentOsType withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
}