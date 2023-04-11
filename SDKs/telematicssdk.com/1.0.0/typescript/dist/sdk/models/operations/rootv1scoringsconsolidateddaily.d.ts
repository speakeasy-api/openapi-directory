import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RootV1ScoringsConsolidatedDailyRequest extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1ScoringsConsolidatedDaily200ApplicationJSONResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
    companyId?: string;
    corneringScore?: number;
    deviceToken?: string;
    distractedScore?: number;
    instanceId?: string;
    overallScore?: number;
    reportDate?: string;
    speedingScore?: number;
}
/**
 * Success
 */
export declare class RootV1ScoringsConsolidatedDaily200ApplicationJSON extends SpeakeasyBase {
    errors?: any[];
    result?: RootV1ScoringsConsolidatedDaily200ApplicationJSONResult[];
    status?: number;
    title?: string;
}
export declare class RootV1ScoringsConsolidatedDailyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    rootV1ScoringsConsolidatedDaily200ApplicationJSONObject?: RootV1ScoringsConsolidatedDaily200ApplicationJSON;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
