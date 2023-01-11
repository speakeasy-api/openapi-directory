package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentLocationCreateRequestAddress
 * Address of the agent location
**/
public class AgentLocationCreateRequestAddress {
    @JsonProperty("city")
    public String city;
    public AgentLocationCreateRequestAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public AgentLocationCreateRequestAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonProperty("state")
    public AgentLocationCreateRequestAddressStateEnum state;
    public AgentLocationCreateRequestAddress withState(AgentLocationCreateRequestAddressStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("street_one")
    public String streetOne;
    public AgentLocationCreateRequestAddress withStreetOne(String streetOne) {
        this.streetOne = streetOne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_two")
    public String streetTwo;
    public AgentLocationCreateRequestAddress withStreetTwo(String streetTwo) {
        this.streetTwo = streetTwo;
        return this;
    }
    @JsonProperty("zip_code")
    public String zipCode;
    public AgentLocationCreateRequestAddress withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}