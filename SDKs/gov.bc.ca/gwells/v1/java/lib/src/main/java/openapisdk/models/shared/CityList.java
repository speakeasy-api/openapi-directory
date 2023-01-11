package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CityList {
    @JsonProperty("organization")
    public Organization organization;
    public CityList withOrganization(Organization organization) {
        this.organization = organization;
        return this;
    }
}