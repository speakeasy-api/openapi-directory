import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncSyncMapItemServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncSyncMapItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncSyncMapItemRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    key: string;
    mapSid: string;
    requestBody?: UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;
    serviceSid: string;
}
export declare class UpdateSyncSyncMapItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncMapSyncMapItem?: shared.PreviewSyncServiceSyncMapSyncMapItem;
}
