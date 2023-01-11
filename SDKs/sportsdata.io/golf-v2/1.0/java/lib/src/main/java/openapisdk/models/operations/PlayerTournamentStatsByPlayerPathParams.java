package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerTournamentStatsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerTournamentStatsByPlayerFormatEnum format;
    public PlayerTournamentStatsByPlayerPathParams withFormat(PlayerTournamentStatsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerTournamentStatsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tournamentid")
    public String tournamentid;
    public PlayerTournamentStatsByPlayerPathParams withTournamentid(String tournamentid) {
        this.tournamentid = tournamentid;
        return this;
    }
}