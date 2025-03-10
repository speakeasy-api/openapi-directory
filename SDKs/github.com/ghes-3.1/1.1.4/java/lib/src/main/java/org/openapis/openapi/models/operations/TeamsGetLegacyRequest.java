/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsGetLegacyRequest {
    /**
     * The unique identifier of the team.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;

    public TeamsGetLegacyRequest withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    
    public TeamsGetLegacyRequest(@JsonProperty("team_id") Long teamId) {
        this.teamId = teamId;
  }
}
