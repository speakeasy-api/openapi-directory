package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1OsConstraint
 * A restriction on the OS type and version of devices making requests.
**/
public class GoogleIdentityAccesscontextmanagerV1OsConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumVersion")
    public String minimumVersion;
    public GoogleIdentityAccesscontextmanagerV1OsConstraint withMinimumVersion(String minimumVersion) {
        this.minimumVersion = minimumVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osType")
    public GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum osType;
    public GoogleIdentityAccesscontextmanagerV1OsConstraint withOsType(GoogleIdentityAccesscontextmanagerV1OsConstraintOsTypeEnum osType) {
        this.osType = osType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireVerifiedChromeOs")
    public Boolean requireVerifiedChromeOs;
    public GoogleIdentityAccesscontextmanagerV1OsConstraint withRequireVerifiedChromeOs(Boolean requireVerifiedChromeOs) {
        this.requireVerifiedChromeOs = requireVerifiedChromeOs;
        return this;
    }
}