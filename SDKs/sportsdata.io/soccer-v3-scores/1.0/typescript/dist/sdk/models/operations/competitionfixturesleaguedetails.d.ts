import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum CompetitionFixturesLeagueDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionFixturesLeagueDetailsRequest extends SpeakeasyBase {
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
     */
    competition: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: CompetitionFixturesLeagueDetailsFormatEnum;
}
export declare class CompetitionFixturesLeagueDetailsResponse extends SpeakeasyBase {
    competitionDetail?: shared.CompetitionDetail;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
