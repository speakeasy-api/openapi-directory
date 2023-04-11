import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetServicePointByIdResponseBodyServicePointFeaturesEnum {
    DropOffPoint = "drop_off_point",
    PickupPoint = "pickup_point",
    PrintServices = "print_services",
    AfterHoursLocker = "after_hours_locker",
    AfterHoursDropbox = "after_hours_dropbox"
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationFriday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationMonday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationSaturday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationSunday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationThursday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationTuesday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday extends SpeakeasyBase {
    close?: string;
    open?: string;
}
export declare class GetServicePointByIdResponseBodyServicePointHoursOfOperation extends SpeakeasyBase {
    friday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationFriday[];
    monday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationMonday[];
    saturday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationSaturday[];
    sunday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationSunday[];
    thursday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationThursday[];
    tuesday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationTuesday[];
    wednesday?: GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday[];
}
export declare class GetServicePointByIdResponseBodyServicePoint extends SpeakeasyBase {
    addressLine1?: string;
    carrierCode?: string;
    cityLocality?: string;
    companyName?: string;
    countryCode?: string;
    features?: GetServicePointByIdResponseBodyServicePointFeaturesEnum[];
    hoursOfOperation?: GetServicePointByIdResponseBodyServicePointHoursOfOperation;
    lat?: number;
    long?: number;
    phoneNumber?: string;
    postalCode?: string;
    serviceCodes?: string[];
    servicePointId?: string;
    stateProvince?: string;
}
/**
 * A get service point by ID response body
 */
export declare class GetServicePointByIdResponseBody extends SpeakeasyBase {
    servicePoint?: GetServicePointByIdResponseBodyServicePoint;
}
