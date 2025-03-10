/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObaIcon - Online Behavioral Advertiser icon.
 */
public class ObaIcon {
    /**
     * URL to redirect to when an OBA icon is clicked.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconClickThroughUrl")
    public String iconClickThroughUrl;

    public ObaIcon withIconClickThroughUrl(String iconClickThroughUrl) {
        this.iconClickThroughUrl = iconClickThroughUrl;
        return this;
    }
    
    /**
     * URL to track click when an OBA icon is clicked.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconClickTrackingUrl")
    public String iconClickTrackingUrl;

    public ObaIcon withIconClickTrackingUrl(String iconClickTrackingUrl) {
        this.iconClickTrackingUrl = iconClickTrackingUrl;
        return this;
    }
    
    /**
     * URL to track view when an OBA icon is clicked.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconViewTrackingUrl")
    public String iconViewTrackingUrl;

    public ObaIcon withIconViewTrackingUrl(String iconViewTrackingUrl) {
        this.iconViewTrackingUrl = iconViewTrackingUrl;
        return this;
    }
    
    /**
     * Identifies the industry initiative that the icon supports. For example, AdChoices.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("program")
    public String program;

    public ObaIcon withProgram(String program) {
        this.program = program;
        return this;
    }
    
    /**
     * OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUrl")
    public String resourceUrl;

    public ObaIcon withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
    
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;

    public ObaIcon withSize(Size size) {
        this.size = size;
        return this;
    }
    
    /**
     * OBA icon x coordinate position. Accepted values are left or right.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xPosition")
    public String xPosition;

    public ObaIcon withXPosition(String xPosition) {
        this.xPosition = xPosition;
        return this;
    }
    
    /**
     * OBA icon y coordinate position. Accepted values are top or bottom.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yPosition")
    public String yPosition;

    public ObaIcon withYPosition(String yPosition) {
        this.yPosition = yPosition;
        return this;
    }
    
    public ObaIcon(){}
}
