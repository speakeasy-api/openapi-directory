import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest extends SpeakeasyBase {
    data: any;
    key: string;
}
export declare class CreateSyncSyncMapItemRequest extends SpeakeasyBase {
    mapSid: string;
    requestBody?: CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;
    serviceSid: string;
}
export declare class CreateSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
