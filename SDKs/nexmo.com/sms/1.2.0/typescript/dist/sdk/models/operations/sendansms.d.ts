import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SendAnSmsFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class SendAnSmsPathParams extends SpeakeasyBase {
    format: SendAnSmsFormatEnum;
}
export declare class SendAnSmsRequest extends SpeakeasyBase {
    pathParams: SendAnSmsPathParams;
    request: any;
}
export declare class SendAnSmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    sendAnSms200ApplicationJSONOneOf?: any;
}
