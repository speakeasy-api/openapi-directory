import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum GamesByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GamesByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: GamesByDateFormatEnum;
}
export declare class GamesByDateResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
