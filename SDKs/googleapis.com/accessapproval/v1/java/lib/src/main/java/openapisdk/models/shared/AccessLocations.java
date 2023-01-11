package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessLocations
 * Home office and physical location of the principal.
**/
public class AccessLocations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalOfficeCountry")
    public String principalOfficeCountry;
    public AccessLocations withPrincipalOfficeCountry(String principalOfficeCountry) {
        this.principalOfficeCountry = principalOfficeCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalPhysicalLocationCountry")
    public String principalPhysicalLocationCountry;
    public AccessLocations withPrincipalPhysicalLocationCountry(String principalPhysicalLocationCountry) {
        this.principalPhysicalLocationCountry = principalPhysicalLocationCountry;
        return this;
    }
}