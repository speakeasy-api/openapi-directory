import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum GamesByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GamesByDateRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *           The date of the game(s).
     *           <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.
     *
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: GamesByDateFormatEnum;
}
export declare class GamesByDateResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
