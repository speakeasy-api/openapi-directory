import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncSyncMapRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
