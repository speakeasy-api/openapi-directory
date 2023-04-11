import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest extends SpeakeasyBase {
    /**
     * (Required)
     */
    endDate?: string;
    /**
     * (Required)
     */
    startDate?: string;
    /**
     * Optional
     */
    tag?: string;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
    calcDate?: string;
    companyId?: string;
    corneringScore?: number;
    deviceToken?: string;
    distractedScore?: number;
    instanceId?: string;
    overallScore?: number;
    speedingScore?: number;
}
/**
 * Success
 */
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON extends SpeakeasyBase {
    errors?: any[];
    result?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult[];
    status?: number;
    title?: string;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONObject?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON;
}
