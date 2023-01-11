package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentLocationEditRequestAddress
 * Address of the agent location
**/
public class AgentLocationEditRequestAddress {
    @JsonProperty("city")
    public String city;
    public AgentLocationEditRequestAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public AgentLocationEditRequestAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public AgentLocationEditRequestAddressStateEnum state;
    public AgentLocationEditRequestAddress withState(AgentLocationEditRequestAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public AgentLocationEditRequestAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public AgentLocationEditRequestAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public AgentLocationEditRequestAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}