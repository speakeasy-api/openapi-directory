import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncSyncListCreateSyncSyncListRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class CreateSyncSyncListRequest extends SpeakeasyBase {
    requestBody?: CreateSyncSyncListCreateSyncSyncListRequest;
    serviceSid: string;
}
export declare class CreateSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncServiceSyncList?: shared.PreviewSyncServiceSyncList;
}
