import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPublicHistoryRequest extends SpeakeasyBase {
    /**
     * Startdatum der Abfrage im Format (JJJJ-MM-DD)
     */
    from?: string;
    /**
     * Ortssuche mit Freitext
     */
    q?: string;
    /**
     * Enddatum der Abfrage im Format (JJJJ-MM-DD)
     */
    to?: string;
}
export declare class GetPublicHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getPublicHistory200ApplicationJSONObject?: Record<string, any>;
}
