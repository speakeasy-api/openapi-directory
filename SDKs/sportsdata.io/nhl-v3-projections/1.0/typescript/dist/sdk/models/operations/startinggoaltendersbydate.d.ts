import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum StartingGoaltendersByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class StartingGoaltendersByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: StartingGoaltendersByDateFormatEnum;
}
export declare class StartingGoaltendersByDateResponse extends SpeakeasyBase {
    contentType: string;
    startingGoaltenders?: shared.StartingGoaltenders[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
