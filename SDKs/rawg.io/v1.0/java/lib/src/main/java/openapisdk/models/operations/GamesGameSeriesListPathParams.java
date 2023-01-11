package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesGameSeriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=game_pk")
    public String gamePk;
    public GamesGameSeriesListPathParams withGamePk(String gamePk) {
        this.gamePk = gamePk;
        return this;
    }
}