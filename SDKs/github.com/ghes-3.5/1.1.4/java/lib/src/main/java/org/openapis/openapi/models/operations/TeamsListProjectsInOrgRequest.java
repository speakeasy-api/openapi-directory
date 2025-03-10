/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsListProjectsInOrgRequest {
    /**
     * The organization name. The name is not case sensitive.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public TeamsListProjectsInOrgRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public TeamsListProjectsInOrgRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results per page (max 100).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public TeamsListProjectsInOrgRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * The slug of the team name.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;

    public TeamsListProjectsInOrgRequest withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
    
    public TeamsListProjectsInOrgRequest(@JsonProperty("org") String org, @JsonProperty("team_slug") String teamSlug) {
        this.org = org;
        this.teamSlug = teamSlug;
  }
}
