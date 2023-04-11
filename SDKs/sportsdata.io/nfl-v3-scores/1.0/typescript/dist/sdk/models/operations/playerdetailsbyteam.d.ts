import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerDetailsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerDetailsByTeamFormatEnum;
    /**
     * Abbreviation of the team. Example: <code>WAS</code>.
     */
    team: string;
}
export declare class PlayerDetailsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerDetails?: shared.PlayerDetail[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
