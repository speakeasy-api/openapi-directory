/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class Youtube {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_id")
    public String channelId;

    public Youtube withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_title")
    public String channelTitle;

    public Youtube withChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments_count")
    public Long commentsCount;

    public Youtube withCommentsCount(Long commentsCount) {
        this.commentsCount = commentsCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;

    public Youtube withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public Youtube withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dislike_count")
    public Long dislikeCount;

    public Youtube withDislikeCount(Long dislikeCount) {
        this.dislikeCount = dislikeCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_id")
    public String externalId;

    public Youtube withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favorite_count")
    public Long favoriteCount;

    public Youtube withFavoriteCount(Long favoriteCount) {
        this.favoriteCount = favoriteCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;

    public Youtube withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("like_count")
    public Long likeCount;

    public Youtube withLikeCount(Long likeCount) {
        this.likeCount = likeCount;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Youtube withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public java.util.Map<String, Object> thumbnails;

    public Youtube withThumbnails(java.util.Map<String, Object> thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view_count")
    public Long viewCount;

    public Youtube withViewCount(Long viewCount) {
        this.viewCount = viewCount;
        return this;
    }
    
    public Youtube(){}
}
