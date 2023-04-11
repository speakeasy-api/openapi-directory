import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ResourceOptionsInputModel } from "./resourceoptionsinputmodel";
/**
 * Resource input model
 */
export declare class ResourceInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    availability?: AvailabilityInputModel;
    contact?: ContactInputModel;
    customFields?: CustomFieldInputModel;
    description?: string;
    email?: string;
    groupId?: string;
    locationId?: string;
    name?: string;
    /**
     * Options for the new resource
     */
    options?: ResourceOptionsInputModel;
    recurringAvailability?: boolean;
    serviceIds?: string[];
    timezoneId?: string;
}
