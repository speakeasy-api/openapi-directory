package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonPlacesLived {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public PersonPlacesLived withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PersonPlacesLived withValue(String value) {
        this.value = value;
        return this;
    }
}