package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAdditionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=game_pk")
    public String gamePk;
    public GamesAdditionsListPathParams withGamePk(String gamePk) {
        this.gamePk = gamePk;
        return this;
    }
}