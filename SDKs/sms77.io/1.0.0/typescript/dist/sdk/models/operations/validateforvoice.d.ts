import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ValidateForVoiceRequest extends SpeakeasyBase {
    /**
     * The callback URL which gets queried right after validation.
     */
    callback?: string;
    /**
     * Determines the recipient. Can only be a number, not a contact from your address book.
     */
    number: string;
}
/**
 * OK
 */
export declare class ValidateForVoice200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    error?: string;
    success?: boolean;
}
export declare class ValidateForVoiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    validateForVoice200ApplicationJSONObject?: ValidateForVoice200ApplicationJSON;
}
