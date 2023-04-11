import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerSeasonStatsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayerSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerSeasonStatsFormatEnum;
    /**
     * Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy).
     *
     * @remarks
     * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
     */
    roundid: string;
}
export declare class PlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
