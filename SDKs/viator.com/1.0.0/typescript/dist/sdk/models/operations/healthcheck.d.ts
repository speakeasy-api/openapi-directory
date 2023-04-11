import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HealthCheckRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
}
/**
 * Success
 */
export declare class HealthCheck200ApplicationJSON extends SpeakeasyBase {
    /**
     * **indicator**: `true` signifies health
     */
    allGood?: boolean;
    /**
     * **indicator**: `true` signifies health
     */
    capiOk?: boolean;
    /**
     * **indicator**: `true` signifies health
     */
    dbOk?: boolean;
    /**
     * **indicator**: `true` signifies health
     */
    memcachedOk?: boolean;
    /**
     * **natural-language description** of any issues regarding the health of the API
     */
    message?: string;
}
export declare class HealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    healthCheck200ApplicationJSONObject?: HealthCheck200ApplicationJSON;
}
