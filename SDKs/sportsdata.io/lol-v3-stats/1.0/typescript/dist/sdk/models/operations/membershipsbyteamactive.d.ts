import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum MembershipsByTeamActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByTeamActiveRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: MembershipsByTeamActiveFormatEnum;
    /**
     * Unique FantasyData Team ID.
     *
     * @remarks
     * Example:<code>100000165</code>.
     */
    teamid: string;
}
export declare class MembershipsByTeamActiveResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: shared.Membership[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
