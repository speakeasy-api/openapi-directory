package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupConfiguration
 * The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
**/
public class GroupConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co2Emission")
    public Double co2Emission;
    public GroupConfiguration withCo2Emission(Double co2Emission) {
        this.co2Emission = co2Emission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyCost")
    public Double energyCost;
    public GroupConfiguration withEnergyCost(Double energyCost) {
        this.energyCost = energyCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupNameFilter")
    public String groupNameFilter;
    public GroupConfiguration withGroupNameFilter(String groupNameFilter) {
        this.groupNameFilter = groupNameFilter;
        return this;
    }
}