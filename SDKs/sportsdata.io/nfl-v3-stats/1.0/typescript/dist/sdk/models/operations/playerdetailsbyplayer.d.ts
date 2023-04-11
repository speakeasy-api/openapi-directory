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
     * Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.
     */
    playerid: string;
}
export declare class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerDetail?: shared.PlayerDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
