import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
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
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON extends SpeakeasyBase {
    errors?: any[];
    result?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult;
    status?: number;
    title?: string;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON;
}
