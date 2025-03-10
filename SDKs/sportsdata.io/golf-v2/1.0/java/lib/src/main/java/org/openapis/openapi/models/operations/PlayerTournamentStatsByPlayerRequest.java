/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PlayerTournamentStatsByPlayerRequest {
    /**
     * Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerTournamentStatsByPlayerFormatEnum format;

    public PlayerTournamentStatsByPlayerRequest withFormat(PlayerTournamentStatsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * Unique FantasyData Player ID.
     * Example:&lt;code&gt;40000019&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;

    public PlayerTournamentStatsByPlayerRequest withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    
    /**
     * The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are &lt;code&gt;58&lt;/code&gt;, &lt;code&gt;61&lt;/code&gt;, etc.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tournamentid")
    public String tournamentid;

    public PlayerTournamentStatsByPlayerRequest withTournamentid(String tournamentid) {
        this.tournamentid = tournamentid;
        return this;
    }
    
    public PlayerTournamentStatsByPlayerRequest(@JsonProperty("format") PlayerTournamentStatsByPlayerFormatEnum format, @JsonProperty("playerid") String playerid, @JsonProperty("tournamentid") String tournamentid) {
        this.format = format;
        this.playerid = playerid;
        this.tournamentid = tournamentid;
  }
}
