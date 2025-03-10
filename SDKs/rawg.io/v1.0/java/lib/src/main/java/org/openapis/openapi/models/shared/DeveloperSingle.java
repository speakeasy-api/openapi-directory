/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DeveloperSingle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public DeveloperSingle withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("games_count")
    public Long gamesCount;

    public DeveloperSingle withGamesCount(Long gamesCount) {
        this.gamesCount = gamesCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;

    public DeveloperSingle withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_background")
    public String imageBackground;

    public DeveloperSingle withImageBackground(String imageBackground) {
        this.imageBackground = imageBackground;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public DeveloperSingle withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;

    public DeveloperSingle withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    
    public DeveloperSingle(@JsonProperty("name") String name) {
        this.name = name;
  }
}
