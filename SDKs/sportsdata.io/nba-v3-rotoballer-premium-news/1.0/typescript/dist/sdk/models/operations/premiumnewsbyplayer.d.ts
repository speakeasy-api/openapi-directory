import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PremiumNewsByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PremiumNewsByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>10000507</code>.
     */
    playerid: string;
}
export declare class PremiumNewsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
