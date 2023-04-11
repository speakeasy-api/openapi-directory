import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ChampionsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ChampionsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ChampionsFormatEnum;
}
export declare class ChampionsResponse extends SpeakeasyBase {
    champions?: shared.Champion[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
