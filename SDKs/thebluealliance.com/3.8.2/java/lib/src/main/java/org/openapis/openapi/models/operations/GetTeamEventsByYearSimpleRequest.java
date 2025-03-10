/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetTeamEventsByYearSimpleRequest {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;

    public GetTeamEventsByYearSimpleRequest withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    
    /**
     * TBA Team Key, eg `frc254`
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;

    public GetTeamEventsByYearSimpleRequest withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;

    public GetTeamEventsByYearSimpleRequest withYear(Long year) {
        this.year = year;
        return this;
    }
    
    public GetTeamEventsByYearSimpleRequest(@JsonProperty("team_key") String teamKey, @JsonProperty("year") Long year) {
        this.teamKey = teamKey;
        this.year = year;
  }
}
