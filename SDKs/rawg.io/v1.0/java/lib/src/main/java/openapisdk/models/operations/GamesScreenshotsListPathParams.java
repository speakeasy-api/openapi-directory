package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScreenshotsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=game_pk")
    public String gamePk;
    public GamesScreenshotsListPathParams withGamePk(String gamePk) {
        this.gamePk = gamePk;
        return this;
    }
}