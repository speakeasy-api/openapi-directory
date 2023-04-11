import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamHittingVsStartingPitcherFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamHittingVsStartingPitcherRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamHittingVsStartingPitcherFormatEnum;
    /**
     * The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
     */
    gameid: string;
    /**
     * The abbreviation of the requested team.
     *
     * @remarks
     * <br>Examples: <code>SF</code>, <code>NYY</code>.
     */
    team: string;
}
export declare class TeamHittingVsStartingPitcherResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
