import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncSyncListItemRequest extends SpeakeasyBase {
    index: number;
    listSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
