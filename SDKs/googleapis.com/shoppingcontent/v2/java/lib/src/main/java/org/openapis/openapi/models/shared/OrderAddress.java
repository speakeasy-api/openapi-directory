/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderAddress {
    /**
     * CLDR country code (e.g. "US").
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;

    public OrderAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAddress")
    public String[] fullAddress;

    public OrderAddress withFullAddress(String[] fullAddress) {
        this.fullAddress = fullAddress;
        return this;
    }
    
    /**
     * Whether the address is a post office box.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPostOfficeBox")
    public Boolean isPostOfficeBox;

    public OrderAddress withIsPostOfficeBox(Boolean isPostOfficeBox) {
        this.isPostOfficeBox = isPostOfficeBox;
        return this;
    }
    
    /**
     * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;

    public OrderAddress withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    
    /**
     * Postal Code or ZIP (e.g. "94043").
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;

    public OrderAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    
    /**
     * Name of the recipient.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientName")
    public String recipientName;

    public OrderAddress withRecipientName(String recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;

    public OrderAddress withRegion(String region) {
        this.region = region;
        return this;
    }
    
    /**
     * Street-level part of the address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetAddress")
    public String[] streetAddress;

    public OrderAddress withStreetAddress(String[] streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
    
    public OrderAddress(){}
}
