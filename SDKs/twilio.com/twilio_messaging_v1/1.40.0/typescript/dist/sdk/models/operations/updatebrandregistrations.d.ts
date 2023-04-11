import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateBrandRegistrationsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateBrandRegistrationsRequest extends SpeakeasyBase {
    /**
     * The SID of the Brand Registration resource to update.
     */
    sid: string;
}
export declare class UpdateBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
