import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUsAppToPersonServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchUsAppToPersonSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUsAppToPersonRequest extends SpeakeasyBase {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to fetch the resource from.
     */
    messagingServiceSid: string;
    /**
     * The SID of the US A2P Compliance resource to fetch `QE2c6890da8086d771620e9b13fadeba0b`.
     */
    sid: string;
}
export declare class FetchUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
