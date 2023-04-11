import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindFormByFormNameSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class FindFormByFormNameRequest extends SpeakeasyBase {
    /**
     * The VA form_name of the form being requested. The exact form name must be passed, including proper placement of prefixes and/or hyphens.
     */
    formName: string;
}
/**
 * Too many requests
 */
export declare class FindFormByFormName429ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class FindFormByFormName404ApplicationJSONErrors extends SpeakeasyBase {
    message?: string;
}
/**
 * Not Found
 */
export declare class FindFormByFormName404ApplicationJSON extends SpeakeasyBase {
    errors: FindFormByFormName404ApplicationJSONErrors[];
}
/**
 * Unauthorized
 */
export declare class FindFormByFormName401ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
/**
 * VA Form Show response
 */
export declare class FindFormByFormName200ApplicationJSON extends SpeakeasyBase {
    /**
     * Data for a particular VA form, including form version history.
     */
    data: shared.FormShow;
}
export declare class FindFormByFormNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VA Form Show response
     */
    findFormByFormName200ApplicationJSONObject?: FindFormByFormName200ApplicationJSON;
    /**
     * Unauthorized
     */
    findFormByFormName401ApplicationJSONObject?: FindFormByFormName401ApplicationJSON;
    /**
     * Not Found
     */
    findFormByFormName404ApplicationJSONObject?: FindFormByFormName404ApplicationJSON;
    /**
     * Too many requests
     */
    findFormByFormName429ApplicationJSONObject?: FindFormByFormName429ApplicationJSON;
}
