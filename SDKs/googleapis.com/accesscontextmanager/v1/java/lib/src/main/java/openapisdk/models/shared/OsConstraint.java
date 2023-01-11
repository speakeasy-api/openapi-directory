package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsConstraint
 * A restriction on the OS type and version of devices making requests.
**/
public class OsConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumVersion")
    public String minimumVersion;
    public OsConstraint withMinimumVersion(String minimumVersion) {
        this.minimumVersion = minimumVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osType")
    public OsConstraintOsTypeEnum osType;
    public OsConstraint withOsType(OsConstraintOsTypeEnum osType) {
        this.osType = osType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireVerifiedChromeOs")
    public Boolean requireVerifiedChromeOs;
    public OsConstraint withRequireVerifiedChromeOs(Boolean requireVerifiedChromeOs) {
        this.requireVerifiedChromeOs = requireVerifiedChromeOs;
        return this;
    }
}