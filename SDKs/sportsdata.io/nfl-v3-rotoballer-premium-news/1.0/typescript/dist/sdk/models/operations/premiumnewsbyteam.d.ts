import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PremiumNewsByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PremiumNewsByTeamFormatEnum;
    /**
     * Abbreviation of the team. Example: <code>WAS</code>.
     */
    team: string;
}
export declare class PremiumNewsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
