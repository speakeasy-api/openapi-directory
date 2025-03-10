/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FloodlightActivityPublisherDynamicTag - Publisher Dynamic Tag
 */
public class FloodlightActivityPublisherDynamicTag {
    /**
     * Whether this tag is applicable only for click-throughs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThrough")
    public Boolean clickThrough;

    public FloodlightActivityPublisherDynamicTag withClickThrough(Boolean clickThrough) {
        this.clickThrough = clickThrough;
        return this;
    }
    
    /**
     * Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;

    public FloodlightActivityPublisherDynamicTag withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    
    /**
     * Dynamic Tag
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicTag")
    public FloodlightActivityDynamicTag dynamicTag;

    public FloodlightActivityPublisherDynamicTag withDynamicTag(FloodlightActivityDynamicTag dynamicTag) {
        this.dynamicTag = dynamicTag;
        return this;
    }
    
    /**
     * Site ID of this dynamic tag.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;

    public FloodlightActivityPublisherDynamicTag withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;

    public FloodlightActivityPublisherDynamicTag withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    
    /**
     * Whether this tag is applicable only for view-throughs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewThrough")
    public Boolean viewThrough;

    public FloodlightActivityPublisherDynamicTag withViewThrough(Boolean viewThrough) {
        this.viewThrough = viewThrough;
        return this;
    }
    
    public FloodlightActivityPublisherDynamicTag(){}
}
