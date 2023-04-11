import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum MembershipsByTeamHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByTeamHistoricalRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: MembershipsByTeamHistoricalFormatEnum;
    /**
     * Unique FantasyData Team ID.
     *
     * @remarks
     * Example:<code>516</code>.
     */
    teamid: string;
}
export declare class MembershipsByTeamHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: shared.Membership[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
