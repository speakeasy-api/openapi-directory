/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GraphicsStatsBucket {
    /**
     * Number of frames in the bucket.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameCount")
    public String frameCount;

    public GraphicsStatsBucket withFrameCount(String frameCount) {
        this.frameCount = frameCount;
        return this;
    }
    
    /**
     * Lower bound of render time in milliseconds.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderMillis")
    public String renderMillis;

    public GraphicsStatsBucket withRenderMillis(String renderMillis) {
        this.renderMillis = renderMillis;
        return this;
    }
    
    public GraphicsStatsBucket(){}
}
