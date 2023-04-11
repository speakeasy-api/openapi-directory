import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    oauth2Legacy1?: string;
    privateAppsLegacy?: string;
    privateAppsLegacy1?: string;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    publicSubscriptionStatus?: shared.PublicSubscriptionStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
