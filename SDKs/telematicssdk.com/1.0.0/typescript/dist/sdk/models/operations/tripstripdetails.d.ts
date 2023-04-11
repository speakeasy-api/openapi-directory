import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TripsTripDetailsRequest extends SpeakeasyBase {
    trackToken?: string;
}
export declare class TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts extends SpeakeasyBase {
    city?: string;
    countryCode?: string;
    district?: string;
    house?: string;
    postalCode?: string;
    street?: string;
}
export declare class TripsTripDetails200ApplicationJSONResultTrackAddressStartParts extends SpeakeasyBase {
    city?: string;
    countryCode?: string;
    district?: string;
    house?: string;
    postalCode?: string;
    street?: string;
}
export declare class TripsTripDetails200ApplicationJSONResultTrackPoints extends SpeakeasyBase {
    alertType?: string;
    alertValue?: number;
    cornering?: boolean;
    course?: number;
    height?: number;
    id?: number;
    lateral?: number;
    latitude?: number;
    longitude?: number;
    midSpeed?: number;
    number?: number;
    phoneUsage?: boolean;
    pointDate?: string;
    speed?: number;
    speedLimit?: number;
    speedType?: string;
    totalMeters?: number;
    yaw?: number;
}
export declare class TripsTripDetails200ApplicationJSONResultTrack extends SpeakeasyBase {
    accelerationCount?: number;
    addressEnd?: string;
    addressFinishParts?: TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts;
    addressStart?: string;
    addressStartParts?: TripsTripDetails200ApplicationJSONResultTrackAddressStartParts;
    beaconId?: number;
    cityFinish?: string;
    cityStart?: string;
    decelerationCount?: number;
    distance?: number;
    drivingTips?: string;
    duration?: number;
    ecoScore?: number;
    ecoScoreBrakes?: number;
    ecoScoreDepreciation?: number;
    ecoScoreFuel?: number;
    ecoScoreTyres?: number;
    endDate?: string;
    highOverSpeedMileage?: number;
    midOverSpeedMileage?: number;
    originChanged?: boolean;
    phoneUsage?: number;
    points?: TripsTripDetails200ApplicationJSONResultTrackPoints[];
    rating?: number;
    rating100?: number;
    ratingAcceleration?: number;
    ratingAcceleration100?: number;
    ratingBraking?: number;
    ratingBraking100?: number;
    ratingCornering?: number;
    ratingCornering100?: number;
    ratingPhoneDistraction100?: number;
    ratingPhoneUsage?: number;
    ratingSpeeding?: number;
    ratingSpeeding100?: number;
    ratingTimeOfDay?: number;
    shareType?: string;
    startDate?: string;
    status?: string;
    trackOriginCode?: string;
}
export declare class TripsTripDetails200ApplicationJSONResult extends SpeakeasyBase {
    code?: number;
    track?: TripsTripDetails200ApplicationJSONResultTrack;
}
/**
 * Success
 */
export declare class TripsTripDetails200ApplicationJSON extends SpeakeasyBase {
    result?: TripsTripDetails200ApplicationJSONResult;
}
export declare class TripsTripDetailsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tripsTripDetails200ApplicationJSONObject?: TripsTripDetails200ApplicationJSON;
}
