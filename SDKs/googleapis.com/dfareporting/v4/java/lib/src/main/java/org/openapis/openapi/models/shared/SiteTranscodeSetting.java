/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SiteTranscodeSetting - Transcode Settings
 */
public class SiteTranscodeSetting {
    /**
     * Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledVideoFormats")
    public Integer[] enabledVideoFormats;

    public SiteTranscodeSetting withEnabledVideoFormats(Integer[] enabledVideoFormats) {
        this.enabledVideoFormats = enabledVideoFormats;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public SiteTranscodeSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    public SiteTranscodeSetting(){}
}
