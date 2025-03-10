/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest {
    /**
     * Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format;

    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest withFormat(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:&lt;code&gt;14257&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;

    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           &lt;br&gt;Examples: &lt;code&gt;2015REG&lt;/code&gt;, &lt;code&gt;2015PRE&lt;/code&gt;, &lt;code&gt;2015POST&lt;/code&gt;.
     *         
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;

    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest withSeason(String season) {
        this.season = season;
        return this;
    }
    
    /**
     *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     *           Example: &lt;code&gt;1&lt;/code&gt;
     *         
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;

    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest withWeek(String week) {
        this.week = week;
        return this;
    }
    
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(@JsonProperty("format") ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format, @JsonProperty("playerid") String playerid, @JsonProperty("season") String season, @JsonProperty("week") String week) {
        this.format = format;
        this.playerid = playerid;
        this.season = season;
        this.week = week;
  }
}
