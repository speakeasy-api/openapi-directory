import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncSyncListItemCreateSyncSyncListItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class CreateSyncSyncListItemRequest extends SpeakeasyBase {
    listSid: string;
    requestBody?: CreateSyncSyncListItemCreateSyncSyncListItemRequest;
    serviceSid: string;
}
export declare class CreateSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
