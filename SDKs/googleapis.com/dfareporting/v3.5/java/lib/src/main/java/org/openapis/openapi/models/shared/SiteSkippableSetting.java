/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SiteSkippableSetting - Skippable Settings
 */
public class SiteSkippableSetting {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public SiteSkippableSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Video Offset
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public VideoOffset progressOffset;

    public SiteSkippableSetting withProgressOffset(VideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    
    /**
     * Video Offset
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public VideoOffset skipOffset;

    public SiteSkippableSetting withSkipOffset(VideoOffset skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    
    /**
     * Whether the user can skip creatives served to this site. This will act as default for new placements created under this site.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippable")
    public Boolean skippable;

    public SiteSkippableSetting withSkippable(Boolean skippable) {
        this.skippable = skippable;
        return this;
    }
    
    public SiteSkippableSetting(){}
}
