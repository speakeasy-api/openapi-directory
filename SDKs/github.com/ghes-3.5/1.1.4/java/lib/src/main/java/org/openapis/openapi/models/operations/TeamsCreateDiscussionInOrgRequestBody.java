/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateDiscussionInOrgRequestBody {
    /**
     * The discussion post's body text.
     */
    @JsonProperty("body")
    public String body;

    public TeamsCreateDiscussionInOrgRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    
    /**
     * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;

    public TeamsCreateDiscussionInOrgRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    
    /**
     * The discussion post's title.
     */
    @JsonProperty("title")
    public String title;

    public TeamsCreateDiscussionInOrgRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public TeamsCreateDiscussionInOrgRequestBody(@JsonProperty("body") String body, @JsonProperty("title") String title) {
        this.body = body;
        this.title = title;
  }
}
