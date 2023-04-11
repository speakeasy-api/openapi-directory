import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVoiceNumberServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchVoiceNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVoiceNumberRequest extends SpeakeasyBase {
    /**
     * The phone number to fetch.
     */
    number: string;
}
export declare class FetchVoiceNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV1VoiceVoiceNumber?: shared.PricingV1VoiceVoiceNumber;
}
