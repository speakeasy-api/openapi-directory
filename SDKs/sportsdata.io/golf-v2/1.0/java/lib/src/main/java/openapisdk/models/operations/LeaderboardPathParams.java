package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeaderboardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LeaderboardFormatEnum format;
    public LeaderboardPathParams withFormat(LeaderboardFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tournamentid")
    public String tournamentid;
    public LeaderboardPathParams withTournamentid(String tournamentid) {
        this.tournamentid = tournamentid;
        return this;
    }
}