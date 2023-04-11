import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The format of the response
 */
export declare enum SendAnSmsFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class SendAnSmsRequest extends SpeakeasyBase {
    newMessage: shared.NewMessage;
    /**
     * The format of the response
     */
    format: SendAnSmsFormatEnum;
}
export declare class SendAnSmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    sendAnSms200ApplicationJSONOneOf?: any;
}
