import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum XPingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class XPingRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: XPingFormatEnum;
    /**
     * Number of seconds to sleep before responding
     */
    seconds: string;
}
export declare class XPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    xPing200ApplicationJSONAny?: any;
}
