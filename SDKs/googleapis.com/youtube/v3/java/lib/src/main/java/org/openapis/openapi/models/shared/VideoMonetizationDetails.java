/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMonetizationDetails - Details about monetization of a YouTube Video.
 */
public class VideoMonetizationDetails {
    /**
     * Rights management policy for YouTube resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public AccessPolicy access;

    public VideoMonetizationDetails withAccess(AccessPolicy access) {
        this.access = access;
        return this;
    }
    
    public VideoMonetizationDetails(){}
}
