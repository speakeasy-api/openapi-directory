import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PhoneNumbersCallerIdsJsonRequest extends SpeakeasyBase {
    /**
     * E.164 Phone Number
     */
    phoneNumber: string;
}
export declare class GetV2PhoneNumbersCallerIdsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
