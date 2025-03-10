/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NAWelcomePlace {
    /**
     * City of the home.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;

    public NAWelcomePlace withCity(String city) {
        this.city = city;
        return this;
    }
    
    /**
     * Country of the home.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;

    public NAWelcomePlace withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Timezone of the home.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;

    public NAWelcomePlace withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    
    public NAWelcomePlace(){}
}
