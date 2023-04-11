import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DfsSlatesByDateFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class DfsSlatesByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
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
