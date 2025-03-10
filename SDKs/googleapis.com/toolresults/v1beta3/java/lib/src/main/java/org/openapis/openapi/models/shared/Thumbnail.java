/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Thumbnail - A single thumbnail, with its size and format.
 */
public class Thumbnail {
    /**
     * The thumbnail's content type, i.e. "image/png". Always set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;

    public Thumbnail withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;

    public Thumbnail withData(String data) {
        this.data = data;
        return this;
    }
    
    /**
     * The height of the thumbnail, in pixels. Always set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPx")
    public Integer heightPx;

    public Thumbnail withHeightPx(Integer heightPx) {
        this.heightPx = heightPx;
        return this;
    }
    
    /**
     * The width of the thumbnail, in pixels. Always set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPx")
    public Integer widthPx;

    public Thumbnail withWidthPx(Integer widthPx) {
        this.widthPx = widthPx;
        return this;
    }
    
    public Thumbnail(){}
}
