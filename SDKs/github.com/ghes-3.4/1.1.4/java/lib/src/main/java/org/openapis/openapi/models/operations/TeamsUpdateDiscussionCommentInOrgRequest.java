/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionCommentInOrgRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionCommentInOrgRequestBody requestBody;

    public TeamsUpdateDiscussionCommentInOrgRequest withRequestBody(TeamsUpdateDiscussionCommentInOrgRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The number that identifies the comment.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_number")
    public Long commentNumber;

    public TeamsUpdateDiscussionCommentInOrgRequest withCommentNumber(Long commentNumber) {
        this.commentNumber = commentNumber;
        return this;
    }
    
    /**
     * The number that identifies the discussion.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;

    public TeamsUpdateDiscussionCommentInOrgRequest withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public TeamsUpdateDiscussionCommentInOrgRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    /**
     * The slug of the team name.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;

    public TeamsUpdateDiscussionCommentInOrgRequest withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
    
    public TeamsUpdateDiscussionCommentInOrgRequest(@JsonProperty("RequestBody") TeamsUpdateDiscussionCommentInOrgRequestBody requestBody, @JsonProperty("comment_number") Long commentNumber, @JsonProperty("discussion_number") Long discussionNumber, @JsonProperty("org") String org, @JsonProperty("team_slug") String teamSlug) {
        this.requestBody = requestBody;
        this.commentNumber = commentNumber;
        this.discussionNumber = discussionNumber;
        this.org = org;
        this.teamSlug = teamSlug;
  }
}
