/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FaceRectangle - An object describing face rectangle.
 */
public class FaceRectangle {
    /**
     * Height measured from the top-left point of the face, in pixels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;

    public FaceRectangle withHeight(Integer height) {
        this.height = height;
        return this;
    }
    
    /**
     * X-coordinate of the top left point of the face, in pixels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Integer left;

    public FaceRectangle withLeft(Integer left) {
        this.left = left;
        return this;
    }
    
    /**
     * Y-coordinate of the top left point of the face, in pixels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Integer top;

    public FaceRectangle withTop(Integer top) {
        this.top = top;
        return this;
    }
    
    /**
     * Width measured from the top-left point of the face, in pixels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;

    public FaceRectangle withWidth(Integer width) {
        this.width = width;
        return this;
    }
    
    public FaceRectangle(){}
}
