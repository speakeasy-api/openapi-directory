package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicensingInformation
 * This class defines an entitlement data on the Publish API
**/
public class LicensingInformation {
    @JsonProperty("license")
    public String license;
    public LicensingInformation withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionRestriction")
    public RegionRestrictions regionRestriction;
    public LicensingInformation withRegionRestriction(RegionRestrictions regionRestriction) {
        this.regionRestriction = regionRestriction;
        return this;
    }
}