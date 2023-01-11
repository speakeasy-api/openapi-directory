package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdatePsuAuthentication
 * Content of the body of a Update PSU authentication request
 * 
 * Password subfield is used.
 * 
**/
public class UpdatePsuAuthentication {
    @JsonProperty("psuData")
    public PsuData psuData;
    public UpdatePsuAuthentication withPsuData(PsuData psuData) {
        this.psuData = psuData;
        return this;
    }
}