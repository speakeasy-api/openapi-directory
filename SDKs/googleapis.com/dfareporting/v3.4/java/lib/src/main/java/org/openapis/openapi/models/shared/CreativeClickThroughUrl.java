/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreativeClickThroughUrl - Click-through URL
 */
public class CreativeClickThroughUrl {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computedClickThroughUrl")
    public String computedClickThroughUrl;

    public CreativeClickThroughUrl withComputedClickThroughUrl(String computedClickThroughUrl) {
        this.computedClickThroughUrl = computedClickThroughUrl;
        return this;
    }
    
    /**
     * Custom click-through URL. Applicable if the landingPageId field is left unset.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClickThroughUrl")
    public String customClickThroughUrl;

    public CreativeClickThroughUrl withCustomClickThroughUrl(String customClickThroughUrl) {
        this.customClickThroughUrl = customClickThroughUrl;
        return this;
    }
    
    /**
     * ID of the landing page for the click-through URL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landingPageId")
    public String landingPageId;

    public CreativeClickThroughUrl withLandingPageId(String landingPageId) {
        this.landingPageId = landingPageId;
        return this;
    }
    
    public CreativeClickThroughUrl(){}
}
