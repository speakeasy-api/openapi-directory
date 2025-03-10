/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SimpleAddressType - A simple representation of an address.
 */
public class SimpleAddressType {
    /**
     * The city or town for the address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;

    public SimpleAddressType withCity(String city) {
        this.city = city;
        return this;
    }
    
    /**
     * The street name and number of this address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line1")
    public String line1;

    public SimpleAddressType withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    
    /**
     * The second line the address, if needed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;

    public SimpleAddressType withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    
    /**
     * The third line of the address, if needed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3")
    public String line3;

    public SimpleAddressType withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    
    /**
     * The name of the location.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;

    public SimpleAddressType withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    
    /**
     * The US two letter state abbreviation of the address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;

    public SimpleAddressType withState(String state) {
        this.state = state;
        return this;
    }
    
    /**
     * The US Postal Zip Code of the address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;

    public SimpleAddressType withZip(String zip) {
        this.zip = zip;
        return this;
    }
    
    public SimpleAddressType(){}
}
