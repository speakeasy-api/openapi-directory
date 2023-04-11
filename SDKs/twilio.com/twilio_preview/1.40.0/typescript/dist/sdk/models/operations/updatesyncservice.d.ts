import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncServiceUpdateSyncServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
}
export declare class UpdateSyncServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateSyncServiceUpdateSyncServiceRequest;
    sid: string;
}
export declare class UpdateSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncService?: shared.PreviewSyncService;
}
