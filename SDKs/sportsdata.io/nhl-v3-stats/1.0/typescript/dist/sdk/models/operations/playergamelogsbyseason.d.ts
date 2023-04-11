import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerGameLogsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameLogsBySeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerGameLogsBySeasonFormatEnum;
    /**
     * How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
     */
    numberofgames: string;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>30000651</code>.
     */
    playerid: string;
    /**
     * Season to get games from. Example <code>2019POST</code>, <code>2020</code>
     */
    season: string;
}
export declare class PlayerGameLogsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: shared.PlayerGame[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
