/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoFormat - Contains information about supported video formats.
 */
public class VideoFormat {
    /**
     * File type of the video format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public VideoFormatFileTypeEnum fileType;

    public VideoFormat withFileType(VideoFormatFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    
    /**
     * ID of the video format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;

    public VideoFormat withId(Integer id) {
        this.id = id;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public VideoFormat withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public Size resolution;

    public VideoFormat withResolution(Size resolution) {
        this.resolution = resolution;
        return this;
    }
    
    /**
     * The target bit rate of this video format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBitRate")
    public Integer targetBitRate;

    public VideoFormat withTargetBitRate(Integer targetBitRate) {
        this.targetBitRate = targetBitRate;
        return this;
    }
    
    public VideoFormat(){}
}
