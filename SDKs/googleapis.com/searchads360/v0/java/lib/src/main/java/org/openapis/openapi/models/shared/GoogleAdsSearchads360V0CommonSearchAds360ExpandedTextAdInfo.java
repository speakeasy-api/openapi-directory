/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo - A Search Ads 360 expanded text ad.
 */
public class GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo {
    /**
     * The tracking id of the ad.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTrackingId")
    public String adTrackingId;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withAdTrackingId(String adTrackingId) {
        this.adTrackingId = adTrackingId;
        return this;
    }
    
    /**
     * The first line of the ad's description.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description1")
    public String description1;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withDescription1(String description1) {
        this.description1 = description1;
        return this;
    }
    
    /**
     * The second line of the ad's description.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description2")
    public String description2;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withDescription2(String description2) {
        this.description2 = description2;
        return this;
    }
    
    /**
     * The headline of the ad.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    
    /**
     * The second headline of the ad.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline2")
    public String headline2;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withHeadline2(String headline2) {
        this.headline2 = headline2;
        return this;
    }
    
    /**
     * The third headline of the ad.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline3")
    public String headline3;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withHeadline3(String headline3) {
        this.headline3 = headline3;
        return this;
    }
    
    /**
     * Text appended to the auto-generated visible URL with a delimiter.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path1")
    public String path1;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withPath1(String path1) {
        this.path1 = path1;
        return this;
    }
    
    /**
     * Text appended to path1 with a delimiter.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path2")
    public String path2;

    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo withPath2(String path2) {
        this.path2 = path2;
        return this;
    }
    
    public GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo(){}
}
