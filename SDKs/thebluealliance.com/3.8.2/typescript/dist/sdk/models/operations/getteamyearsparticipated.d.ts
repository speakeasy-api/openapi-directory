import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTeamYearsParticipatedSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamYearsParticipatedRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
}
export declare class GetTeamYearsParticipatedResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getTeamYearsParticipated200ApplicationJSONIntegers?: number[];
}
