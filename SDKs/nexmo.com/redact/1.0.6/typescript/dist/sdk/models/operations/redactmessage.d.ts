import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RedactMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RedactMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No such record
     */
    errorInvalidId?: shared.ErrorInvalidId;
    /**
     * Rate Limited
     */
    errorThrottled?: shared.ErrorThrottled;
    /**
     * Authentication failure
     */
    errorUnauthorized?: shared.ErrorUnauthorized;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Authorisation denied
     */
    redactMessage403ApplicationJSONOneOf?: any;
    /**
     * Invalid JSON body
     */
    redactMessage422ApplicationJSONOneOf?: any;
}
