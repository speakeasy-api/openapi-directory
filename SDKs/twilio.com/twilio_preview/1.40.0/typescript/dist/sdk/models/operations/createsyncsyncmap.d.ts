import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncSyncMapCreateSyncSyncMapRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class CreateSyncSyncMapRequest extends SpeakeasyBase {
    requestBody?: CreateSyncSyncMapCreateSyncSyncMapRequest;
    serviceSid: string;
}
export declare class CreateSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncServiceSyncMap?: shared.PreviewSyncServiceSyncMap;
}
