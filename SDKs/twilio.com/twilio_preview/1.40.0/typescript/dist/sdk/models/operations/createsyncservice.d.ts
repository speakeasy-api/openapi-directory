import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncServiceCreateSyncServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
}
export declare class CreateSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewSyncService?: shared.PreviewSyncService;
}
