import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RotoballerArticlesByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RotoballerArticlesByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>10000507</code>.
     */
    playerid: string;
}
export declare class RotoballerArticlesByPlayerResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
