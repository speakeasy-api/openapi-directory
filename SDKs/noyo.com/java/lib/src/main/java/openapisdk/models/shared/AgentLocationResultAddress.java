package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentLocationResultAddress
 * Address of the agent location
**/
public class AgentLocationResultAddress {
    @JsonProperty("city")
    public String city;
    public AgentLocationResultAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public AgentLocationResultAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public AgentLocationResultAddressStateEnum state;
    public AgentLocationResultAddress withState(AgentLocationResultAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public AgentLocationResultAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public AgentLocationResultAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public AgentLocationResultAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}