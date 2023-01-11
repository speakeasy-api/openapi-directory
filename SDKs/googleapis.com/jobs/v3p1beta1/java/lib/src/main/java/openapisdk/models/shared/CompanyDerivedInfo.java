package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanyDerivedInfo
 * Derived details about the company.
**/
public class CompanyDerivedInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headquartersLocation")
    public Location headquartersLocation;
    public CompanyDerivedInfo withHeadquartersLocation(Location headquartersLocation) {
        this.headquartersLocation = headquartersLocation;
        return this;
    }
}