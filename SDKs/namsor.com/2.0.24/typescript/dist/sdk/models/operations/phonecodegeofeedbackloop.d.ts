import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneCodeGeoFeedbackLoopSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PhoneCodeGeoFeedbackLoopRequest extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    phoneNumberE164: string;
}
export declare class PhoneCodeGeoFeedbackLoopResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A name with country and phone code.
     */
    firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
