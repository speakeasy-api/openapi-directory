import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLegRequest extends SpeakeasyBase {
    /**
     * Leg ID
     */
    legId: string;
}
export declare class DeleteLegResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response with empty JSON
     */
    deleteLeg200ApplicationJSONObject?: Record<string, any>;
}
