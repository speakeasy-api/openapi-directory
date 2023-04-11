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
     * The destination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
     */
    destinationNumber: string;
    /**
     * The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
     */
    originationNumber?: string;
}
export declare class FetchVoiceNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV2VoiceVoiceNumber?: shared.PricingV2VoiceVoiceNumber;
}
