import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchBrandRegistrationsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBrandRegistrationsRequest extends SpeakeasyBase {
    /**
     * The SID of the Brand Registration resource to fetch.
     */
    sid: string;
}
export declare class FetchBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
