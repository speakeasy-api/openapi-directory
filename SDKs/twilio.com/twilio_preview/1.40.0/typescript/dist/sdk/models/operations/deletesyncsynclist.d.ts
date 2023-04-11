import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncSyncListRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
