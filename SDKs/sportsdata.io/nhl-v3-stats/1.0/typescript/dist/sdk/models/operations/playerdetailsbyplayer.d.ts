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
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>30000007</code>.
     */
    playerid: string;
}
export declare class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    player?: shared.Player;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
