import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayersByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayersByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayersByTeamFormatEnum;
    /**
     * Unique FantasyData Team ID.
     *
     * @remarks
     * Example:<code>100000001</code>.
     */
    teamid: string;
}
export declare class PlayersByTeamResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
