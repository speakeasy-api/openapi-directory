/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageIdCreateEntry {
    /**
     * Id of the image.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ImageIdCreateEntry withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public Region[] regions;

    public ImageIdCreateEntry withRegions(Region[] regions) {
        this.regions = regions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
    public String[] tagIds;

    public ImageIdCreateEntry withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    
    public ImageIdCreateEntry(){}
}
