package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppliedLicense
 * AppliedLicense holds the license data returned by adaptation module report.
**/
public class AppliedLicense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osLicense")
    public String osLicense;
    public AppliedLicense withOsLicense(String osLicense) {
        this.osLicense = osLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AppliedLicenseTypeEnum type;
    public AppliedLicense withType(AppliedLicenseTypeEnum type) {
        this.type = type;
        return this;
    }
}