import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncSyncListItemUpdateSyncSyncListItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncSyncListItemRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    index: number;
    listSid: string;
    requestBody?: UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;
    serviceSid: string;
}
export declare class UpdateSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
