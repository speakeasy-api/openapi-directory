package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionCommentInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discussion_number")
    public Long discussionNumber;
    public TeamsCreateDiscussionCommentInOrgPathParams withDiscussionNumber(Long discussionNumber) {
        this.discussionNumber = discussionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsCreateDiscussionCommentInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsCreateDiscussionCommentInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}