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
     * A CS:GO competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.
     */
    competitionid: string;
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
