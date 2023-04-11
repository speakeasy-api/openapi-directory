import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the PhoneNumber resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to fetch the PhoneNumber resource.
     */
    trunkSid: string;
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkPhoneNumber?: shared.TrunkingV1TrunkPhoneNumber;
}
