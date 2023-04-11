import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerDetailsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerDetailsByPlayerFormatEnum;
    /**
     *
     * @remarks
     *           Unique FantasyData Player ID.
     *           Example:<code>50002016</code>.
     *
     */
    playerid: string;
}
export declare class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
