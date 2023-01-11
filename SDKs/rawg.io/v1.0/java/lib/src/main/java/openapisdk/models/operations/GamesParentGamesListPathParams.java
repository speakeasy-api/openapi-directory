package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesParentGamesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=game_pk")
    public String gamePk;
    public GamesParentGamesListPathParams withGamePk(String gamePk) {
        this.gamePk = gamePk;
        return this;
    }
}