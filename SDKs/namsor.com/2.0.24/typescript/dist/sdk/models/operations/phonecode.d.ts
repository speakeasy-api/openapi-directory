import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneCodeSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PhoneCodeRequest extends SpeakeasyBase {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
export declare class PhoneCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A name with country and phone code.
     */
    firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
