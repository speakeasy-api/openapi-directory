import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindFormsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class FindFormsRequest extends SpeakeasyBase {
    /**
     * Returns form data based on entered form name.
     */
    query?: string;
}
/**
 * Too many requests
 */
export declare class FindForms429ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
/**
 * Unauthorized
 */
export declare class FindForms401ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
/**
 * VA Forms index response
 */
export declare class FindForms200ApplicationJSON extends SpeakeasyBase {
    data: shared.FormsIndex[];
}
export declare class FindFormsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VA Forms index response
     */
    findForms200ApplicationJSONObject?: FindForms200ApplicationJSON;
    /**
     * Unauthorized
     */
    findForms401ApplicationJSONObject?: FindForms401ApplicationJSON;
    /**
     * Too many requests
     */
    findForms429ApplicationJSONObject?: FindForms429ApplicationJSON;
}
