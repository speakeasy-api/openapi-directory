import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamSeasonStatsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class TeamSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamSeasonStatsFormatEnum;
    /**
     * Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy).
     *
     * @remarks
     * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
     */
    roundid: string;
}
export declare class TeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamSeasons?: shared.TeamSeason[];
}
