import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SeasonTeamsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SeasonTeamsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SeasonTeamsFormatEnum;
    /**
     * Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy).
     *
     * @remarks
     * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
     */
    seasonid: string;
}
export declare class SeasonTeamsResponse extends SpeakeasyBase {
    contentType: string;
    seasonTeams?: shared.SeasonTeam[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
