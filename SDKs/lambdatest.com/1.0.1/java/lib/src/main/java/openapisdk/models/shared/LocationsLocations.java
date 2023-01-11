package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationsLocations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public LocationsLocations withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationsLocations withName(String name) {
        this.name = name;
        return this;
    }
}