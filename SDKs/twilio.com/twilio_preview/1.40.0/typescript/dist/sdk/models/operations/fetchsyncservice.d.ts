import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncServiceRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncService?: shared.PreviewSyncService;
}
