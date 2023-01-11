package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorridorIn
 * Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
**/
public class CorridorIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstLastNameGeoFrom")
    public FirstLastNameGeoIn firstLastNameGeoFrom;
    public CorridorIn withFirstLastNameGeoFrom(FirstLastNameGeoIn firstLastNameGeoFrom) {
        this.firstLastNameGeoFrom = firstLastNameGeoFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstLastNameGeoTo")
    public FirstLastNameGeoIn firstLastNameGeoTo;
    public CorridorIn withFirstLastNameGeoTo(FirstLastNameGeoIn firstLastNameGeoTo) {
        this.firstLastNameGeoTo = firstLastNameGeoTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CorridorIn withId(String id) {
        this.id = id;
        return this;
    }
}