import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUsAppToPersonUsecaseServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchUsAppToPersonUsecaseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUsAppToPersonUsecaseRequest extends SpeakeasyBase {
    /**
     * The unique string to identify the A2P brand.
     */
    brandRegistrationSid?: string;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to fetch the resource from.
     */
    messagingServiceSid: string;
}
export declare class FetchUsAppToPersonUsecaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1ServiceUsAppToPersonUsecase?: shared.MessagingV1ServiceUsAppToPersonUsecase;
}
