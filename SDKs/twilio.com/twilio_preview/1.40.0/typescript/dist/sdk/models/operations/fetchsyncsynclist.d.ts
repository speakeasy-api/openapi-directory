import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncSyncListRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncList?: shared.PreviewSyncServiceSyncList;
}
