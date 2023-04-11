import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostEventsV3SendSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostEventsV3SendResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
