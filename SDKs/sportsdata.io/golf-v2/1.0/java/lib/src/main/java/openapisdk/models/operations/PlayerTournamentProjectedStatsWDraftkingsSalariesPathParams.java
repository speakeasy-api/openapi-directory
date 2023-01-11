package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum format;
    public PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams withFormat(PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tournamentid")
    public String tournamentid;
    public PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams withTournamentid(String tournamentid) {
        this.tournamentid = tournamentid;
        return this;
    }
}