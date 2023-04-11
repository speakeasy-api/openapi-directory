import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayersByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayersByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayersByTeamFormatEnum;
    /**
     * The abbreviation of the requested team.
     *
     * @remarks
     *  <br>Examples: <code>SF</code>, <code>NYY</code>.
     *
     */
    team: string;
}
export declare class PlayersByTeamResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
