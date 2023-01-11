package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerName
 * A representation of the individual components of the name.
**/
public class PlayerName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public PlayerName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public PlayerName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
}