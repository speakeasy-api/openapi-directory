import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    oauth2Legacy1?: string;
    privateAppsLegacy?: string;
    privateAppsLegacy1?: string;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest extends SpeakeasyBase {
    emailAddress: string;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    publicSubscriptionStatusesResponse?: shared.PublicSubscriptionStatusesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
