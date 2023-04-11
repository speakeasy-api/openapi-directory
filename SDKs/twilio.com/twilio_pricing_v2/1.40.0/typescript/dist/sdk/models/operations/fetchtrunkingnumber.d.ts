import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrunkingNumberServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchTrunkingNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrunkingNumberRequest extends SpeakeasyBase {
    /**
     * The destination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
     */
    destinationNumber: string;
    /**
     * The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
     */
    originationNumber?: string;
}
export declare class FetchTrunkingNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    pricingV2TrunkingNumber?: shared.PricingV2TrunkingNumber;
}
