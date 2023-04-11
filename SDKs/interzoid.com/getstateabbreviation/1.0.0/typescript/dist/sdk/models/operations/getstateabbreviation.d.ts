import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetstateabbreviationRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * State (or province) name from which to retrieve the two letter abbreviation.
     */
    state: string;
}
/**
 * State (or province) standardized two-letter abbreviation
 */
export declare class Getstateabbreviation200ApplicationJSON extends SpeakeasyBase {
    abbreviation?: string;
    code?: string;
    credits?: string;
    state?: string;
}
export declare class GetstateabbreviationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * State (or province) standardized two-letter abbreviation
     */
    getstateabbreviation200ApplicationJSONObject?: Getstateabbreviation200ApplicationJSON;
}
