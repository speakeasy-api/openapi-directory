/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsCheckPermissionsForRepoInOrgRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public TeamsCheckPermissionsForRepoInOrgRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public TeamsCheckPermissionsForRepoInOrgRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public TeamsCheckPermissionsForRepoInOrgRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    /**
     * team_slug parameter
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;

    public TeamsCheckPermissionsForRepoInOrgRequest withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
    
    public TeamsCheckPermissionsForRepoInOrgRequest(@JsonProperty("org") String org, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo, @JsonProperty("team_slug") String teamSlug) {
        this.org = org;
        this.owner = owner;
        this.repo = repo;
        this.teamSlug = teamSlug;
  }
}
