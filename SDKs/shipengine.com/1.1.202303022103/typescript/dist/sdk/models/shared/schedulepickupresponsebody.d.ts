import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetails } from "./contactdetails";
import { ErrorT } from "./error";
import { PickupWindows } from "./pickupwindows";
/**
 * Indicates whether an address is residential.
 */
export declare enum SchedulePickupResponseBodyPartialAddressAddressResidentialIndicatorEnum {
    Unknown = "unknown",
    Yes = "yes",
    No = "no"
}
/**
 * A complete or partial mailing address.
 */
export declare class SchedulePickupResponseBodyPartialAddress extends SpeakeasyBase {
    /**
     * The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
     *
     * @remarks
     *
     */
    addressLine1: string;
    /**
     * The second line of the street address.  For some addresses, this line may not be needed.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * The third line of the street address.  For some addresses, this line may not be needed.
     *
     * @remarks
     *
     */
    addressLine3?: string;
    /**
     * Indicates whether this is a residential address.
     */
    addressResidentialIndicator: SchedulePickupResponseBodyPartialAddressAddressResidentialIndicatorEnum;
    /**
     * The name of the city or locality
     */
    cityLocality: string;
    /**
     * If this is a business address, then the company name should be specified here.
     *
     * @remarks
     *
     */
    companyName?: string;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
     *
     * @remarks
     *
     */
    countryCode: string;
    /**
     * Email for the address owner.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
     *
     * @remarks
     *
     */
    phone: string;
    postalCode: string;
    /**
     * The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
     *
     * @remarks
     *
     */
    stateProvince: string;
}
/**
 * An error response body
 */
export declare class SchedulePickupResponseBodyOutput extends SpeakeasyBase {
    /**
     * The date and time that the pickup was cancelled in ShipEngine.
     */
    cancelledAt?: Date;
    /**
     * The carrier_id associated with the pickup
     */
    carrierId?: string;
    /**
     * The carrier confirmation number for the scheduled pickup.
     */
    confirmationNumber?: string;
    contactDetails?: ContactDetails;
    /**
     * The date and time that the pickup was created in ShipEngine.
     */
    createdAt?: Date;
    /**
     * The errors associated with the failed API call
     */
    errors: ErrorT[];
    /**
     * Label IDs that will be included in the pickup request
     */
    labelIds?: string[];
    pickupAddress?: SchedulePickupResponseBodyPartialAddress;
    pickupId?: string;
    /**
     * Used by some carriers to give special instructions for a package pickup
     */
    pickupNotes?: string;
    /**
     * An array of available pickup windows. Carriers can return multiple times that they will pickup packages.
     *
     * @remarks
     *
     */
    pickupWindows?: PickupWindows[];
    /**
     * A UUID that uniquely identifies the request id.
     *
     * @remarks
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    requestId: string;
    /**
     * The warehouse_id associated with the pickup
     */
    warehouseId?: string;
}
