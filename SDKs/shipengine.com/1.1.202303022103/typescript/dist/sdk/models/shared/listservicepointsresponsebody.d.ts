import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
export declare enum ListServicePointsResponseBodyServicePointsFeaturesEnum {
    DropOffPoint = "drop_off_point",
    PickupPoint = "pickup_point",
    PrintServices = "print_services",
    AfterHoursLocker = "after_hours_locker",
    AfterHoursDropbox = "after_hours_dropbox"
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationFriday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationMonday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationSaturday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationSunday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationThursday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationTuesday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperationWednesday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class ListServicePointsResponseBodyServicePointsHoursOfOperation extends SpeakeasyBase {
    friday?: ListServicePointsResponseBodyServicePointsHoursOfOperationFriday[];
    monday?: ListServicePointsResponseBodyServicePointsHoursOfOperationMonday[];
    saturday?: ListServicePointsResponseBodyServicePointsHoursOfOperationSaturday[];
    sunday?: ListServicePointsResponseBodyServicePointsHoursOfOperationSunday[];
    thursday?: ListServicePointsResponseBodyServicePointsHoursOfOperationThursday[];
    tuesday?: ListServicePointsResponseBodyServicePointsHoursOfOperationTuesday[];
    wednesday?: ListServicePointsResponseBodyServicePointsHoursOfOperationWednesday[];
}
export declare class ListServicePointsResponseBodyServicePoints extends SpeakeasyBase {
    addressLine1?: string;
    carrierCode?: string;
    cityLocality?: string;
    companyName?: string;
    countryCode?: string;
    distanceInMeters?: number;
    features?: ListServicePointsResponseBodyServicePointsFeaturesEnum[];
    hoursOfOperation?: ListServicePointsResponseBodyServicePointsHoursOfOperation;
    lat?: number;
    long?: number;
    phoneNumber?: string;
    postalCode?: string;
    serviceCodes?: string[];
    servicePointId?: string;
    stateProvince?: string;
}
/**
 * A list service points response body
 */
export declare class ListServicePointsResponseBody extends SpeakeasyBase {
    /**
     * The errors associated with the failed API call
     */
    errors?: ErrorT[];
    lat?: number;
    long?: number;
    servicePoints?: ListServicePointsResponseBodyServicePoints[];
}
