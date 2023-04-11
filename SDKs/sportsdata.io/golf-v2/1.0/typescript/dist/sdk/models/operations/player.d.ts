import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>40000019</code>.
     */
    playerid: string;
}
export declare class PlayerResponse extends SpeakeasyBase {
    contentType: string;
    player?: shared.Player;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
