import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroundhogRequest extends SpeakeasyBase {
    /**
     * Groundhog name in kebab-case: (eg, lucy-the-lobster)
     */
    slug: string;
}
export declare class Groundhog400ApplicationJSONError extends SpeakeasyBase {
    message: string;
    status: number;
    timestamp: string;
}
/**
 * Bad Request
 */
export declare class Groundhog400ApplicationJSON extends SpeakeasyBase {
    error?: Groundhog400ApplicationJSONError;
}
/**
 * OK
 */
export declare class Groundhog200ApplicationJSON extends SpeakeasyBase {
    /**
     * An animal that makes an annual prediction on Groundhog Day.
     */
    groundhog?: shared.Groundhog;
}
export declare class GroundhogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    groundhog200ApplicationJSONObject?: Groundhog200ApplicationJSON;
    /**
     * Bad Request
     */
    groundhog400ApplicationJSONObject?: Groundhog400ApplicationJSON;
}
