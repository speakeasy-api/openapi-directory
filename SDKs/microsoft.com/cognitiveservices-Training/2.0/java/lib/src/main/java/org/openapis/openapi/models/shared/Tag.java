/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag - Represents a Tag
 */
public class Tag {
    /**
     * Gets or sets the description of the tag
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public Tag withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Gets the Tag ID
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Tag withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Gets the number of images with this tag
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageCount")
    public Integer imageCount;

    public Tag withImageCount(Integer imageCount) {
        this.imageCount = imageCount;
        return this;
    }
    
    /**
     * Gets or sets the name of the tag
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Tag withName(String name) {
        this.name = name;
        return this;
    }
    
    public Tag(){}
}
