import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DfsSlatesByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DfsSlatesByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DfsSlatesByDateFormatEnum;
}
export declare class DfsSlatesByDateResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: shared.DfsSlate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
