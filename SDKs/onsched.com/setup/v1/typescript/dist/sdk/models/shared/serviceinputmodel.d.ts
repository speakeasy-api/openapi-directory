import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ServiceFeesInputModel } from "./servicefeesinputmodel";
import { ServiceOptionsInputModel } from "./serviceoptionsinputmodel";
import { ServiceSettingsInputModel } from "./servicesettingsinputmodel";
export declare class ServiceInputModel extends SpeakeasyBase {
    availability?: AvailabilityInputModel;
    bookingInterval?: number;
    bookingLimit?: number;
    customFields?: CustomFieldInputModel;
    description?: string;
    duration?: number;
    fees?: ServiceFeesInputModel;
    locationId?: string;
    maxCapacity?: number;
    maxGroupSize?: number;
    mediaPageUrl?: string;
    name?: string;
    options?: ServiceOptionsInputModel;
    public?: boolean;
    serviceGroupId?: string;
    settings?: ServiceSettingsInputModel;
    type?: string;
}
