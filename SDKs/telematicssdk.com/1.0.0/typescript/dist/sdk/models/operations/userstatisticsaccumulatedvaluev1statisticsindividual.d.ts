import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividualRequest extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult extends SpeakeasyBase {
    accelerationCount?: number;
    appId?: string;
    averageSpeedKmh?: number;
    averageSpeedMileh?: number;
    breakingCount?: number;
    companyId?: string;
    corneringCount?: number;
    dayDrivingTime?: number;
    deviceToken?: string;
    driverTripsCount?: number;
    drivingTime?: number;
    instanceId?: string;
    maxSpeedKmh?: number;
    maxSpeedMileh?: number;
    mileageKm?: number;
    mileageMile?: number;
    nightDrivingTime?: number;
    otherTripsCount?: number;
    phoneUsageDistanceKm?: number;
    phoneUsageDistanceMile?: number;
    phoneUsageDurationMin?: number;
    phoneUsageOverSpeedDistanceKm?: number;
    phoneUsageOverSpeedDistanceMile?: number;
    phoneUsageOverSpeedDurationMin?: number;
    rushHoursDrivingTime?: number;
    totalSpeedingKm?: number;
    totalSpeedingMile?: number;
    tripsCount?: number;
}
/**
 * Success
 */
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON extends SpeakeasyBase {
    errors?: any[];
    result?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult;
    status?: number;
    title?: string;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividualResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON;
}
