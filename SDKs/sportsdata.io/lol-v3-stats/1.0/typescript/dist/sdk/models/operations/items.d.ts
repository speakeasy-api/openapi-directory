import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ItemsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ItemsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ItemsFormatEnum;
}
export declare class ItemsResponse extends SpeakeasyBase {
    contentType: string;
    items?: shared.Item[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
