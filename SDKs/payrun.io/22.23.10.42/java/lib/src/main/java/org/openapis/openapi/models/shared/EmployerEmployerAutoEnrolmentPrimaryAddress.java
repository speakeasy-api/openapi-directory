/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmployerEmployerAutoEnrolmentPrimaryAddress - The employer auto enrolments' primary address
 */
public class EmployerEmployerAutoEnrolmentPrimaryAddress {
    /**
     * The addresss' line 1
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address1")
    public String address1;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    
    /**
     * The addresss' line 2
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address2")
    public String address2;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    
    /**
     * The addresss' line 3
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address3")
    public String address3;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    
    /**
     * The addresss' line 4
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address4")
    public String address4;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withAddress4(String address4) {
        this.address4 = address4;
        return this;
    }
    
    /**
     * The addresss' country
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * The addresss' postcode
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Postcode")
    public String postcode;
    public EmployerEmployerAutoEnrolmentPrimaryAddress withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    
}
