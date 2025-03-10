/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsByTeamWAdpRequest {
    /**
     * Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum format;

    public ProjectedPlayerSeasonStatsByTeamWAdpRequest withFormat(ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           &lt;br&gt;Examples: &lt;code&gt;2015REG&lt;/code&gt;, &lt;code&gt;2015PRE&lt;/code&gt;, &lt;code&gt;2015POST&lt;/code&gt;.
     *         
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;

    public ProjectedPlayerSeasonStatsByTeamWAdpRequest withSeason(String season) {
        this.season = season;
        return this;
    }
    
    /**
     * Abbreviation of the team. Example: &lt;code&gt;WAS&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;

    public ProjectedPlayerSeasonStatsByTeamWAdpRequest withTeam(String team) {
        this.team = team;
        return this;
    }
    
    public ProjectedPlayerSeasonStatsByTeamWAdpRequest(@JsonProperty("format") ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum format, @JsonProperty("season") String season, @JsonProperty("team") String team) {
        this.format = format;
        this.season = season;
        this.team = team;
  }
}
