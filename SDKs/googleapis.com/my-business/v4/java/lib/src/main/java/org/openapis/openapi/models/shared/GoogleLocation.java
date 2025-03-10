/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleLocation - Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
 */
public class GoogleLocation {
    /**
     * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;

    public GoogleLocation withLocation(Location location) {
        this.location = location;
        return this;
    }
    
    /**
     * Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public GoogleLocation withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestAdminRightsUrl")
    public String requestAdminRightsUrl;

    public GoogleLocation withRequestAdminRightsUrl(String requestAdminRightsUrl) {
        this.requestAdminRightsUrl = requestAdminRightsUrl;
        return this;
    }
    
    public GoogleLocation(){}
}
