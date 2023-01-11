package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsCreateDiscussionInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsCreateDiscussionInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}