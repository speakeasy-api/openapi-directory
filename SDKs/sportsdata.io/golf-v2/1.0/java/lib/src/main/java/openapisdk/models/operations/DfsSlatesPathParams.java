package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfsSlatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DfsSlatesFormatEnum format;
    public DfsSlatesPathParams withFormat(DfsSlatesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tournamentid")
    public String tournamentid;
    public DfsSlatesPathParams withTournamentid(String tournamentid) {
        this.tournamentid = tournamentid;
        return this;
    }
}