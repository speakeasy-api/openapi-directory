/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Getareacode200ApplicationJSON - Telephone area code information
 */
public class Getareacode200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Abbreviation")
    public String abbreviation;

    public Getareacode200ApplicationJSON withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AreaCode")
    public String areaCode;

    public Getareacode200ApplicationJSON withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;

    public Getareacode200ApplicationJSON withCode(String code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;

    public Getareacode200ApplicationJSON withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Locale")
    public String locale;

    public Getareacode200ApplicationJSON withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryCity")
    public String primaryCity;

    public Getareacode200ApplicationJSON withPrimaryCity(String primaryCity) {
        this.primaryCity = primaryCity;
        return this;
    }
    
    public Getareacode200ApplicationJSON(){}
}
