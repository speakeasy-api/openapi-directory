/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Size - Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
 */
public class Size {
    /**
     * Set a custom height for the video or image file. Value must be divisible by 2. Maximum video height is 1920px, maximum image height is 4096px.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;

    public Size withHeight(Long height) {
        this.height = height;
        return this;
    }
    
    /**
     * Set a custom width for the video or image file. Value must be divisible by 2. Maximum video width is 1920px, maximum image width is 4096px.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;

    public Size withWidth(Long width) {
        this.width = width;
        return this;
    }
    
    public Size(){}
}
