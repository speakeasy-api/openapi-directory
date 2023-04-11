import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;
    /**
     *
     * @remarks
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
}
export declare class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
