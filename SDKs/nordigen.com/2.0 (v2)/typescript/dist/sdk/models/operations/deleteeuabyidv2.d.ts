import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteEUAByIdV2Request extends SpeakeasyBase {
    /**
     * A UUID string identifying this end user agreement.
     */
    id: string;
}
export declare class DeleteEUAByIdV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    deleteEUAByIdV2400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    deleteEUAByIdV2401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    deleteEUAByIdV2403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    deleteEUAByIdV2404ApplicationJSONObject?: Record<string, any>;
}
