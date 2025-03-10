/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionLegacyRequest {
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public ReactionsListForTeamDiscussionLegacyContentEnum content;

    public ReactionsListForTeamDiscussionLegacyRequest withContent(ReactionsListForTeamDiscussionLegacyContentEnum content) {
        this.content = content;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;

    public ReactionsListForTeamDiscussionLegacyRequest withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public ReactionsListForTeamDiscussionLegacyRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public ReactionsListForTeamDiscussionLegacyRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;

    public ReactionsListForTeamDiscussionLegacyRequest withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    
    public ReactionsListForTeamDiscussionLegacyRequest(@JsonProperty("discussion_number") Long discussionNumber, @JsonProperty("team_id") Long teamId) {
        this.discussionNumber = discussionNumber;
        this.teamId = teamId;
  }
}
