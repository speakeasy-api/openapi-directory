/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentActorClientSpecificActorInfo - Actor info specific to particular clients.
 */
public class CommentActorClientSpecificActorInfo {
    /**
     * Actor info specific to YouTube clients.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeActorInfo")
    public CommentActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo;

    public CommentActorClientSpecificActorInfo withYoutubeActorInfo(CommentActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo) {
        this.youtubeActorInfo = youtubeActorInfo;
        return this;
    }
    
    public CommentActorClientSpecificActorInfo(){}
}
