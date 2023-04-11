import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum StartingLineupsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class StartingLineupsByDateRequest extends SpeakeasyBase {
    /**
     * The date of the slates.
     *
     * @remarks
     * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: StartingLineupsByDateFormatEnum;
}
export declare class StartingLineupsByDateResponse extends SpeakeasyBase {
    contentType: string;
    startingLineups?: shared.StartingLineups[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
