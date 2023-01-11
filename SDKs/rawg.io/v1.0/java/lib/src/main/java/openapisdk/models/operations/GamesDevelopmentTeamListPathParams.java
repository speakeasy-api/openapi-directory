package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesDevelopmentTeamListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=game_pk")
    public String gamePk;
    public GamesDevelopmentTeamListPathParams withGamePk(String gamePk) {
        this.gamePk = gamePk;
        return this;
    }
}