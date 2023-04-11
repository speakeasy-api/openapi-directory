import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { AddressValidationStatusEnum } from "./addressvalidationstatusenum";
import { ResponseMessage } from "./responsemessage";
/**
 * Indicates whether an address is residential.
 */
export declare enum AddressValidationResultPartialAddressAddressResidentialIndicatorEnum {
    Unknown = "unknown",
    Yes = "yes",
    No = "no"
}
/**
 * A complete or partial mailing address.
 */
export declare class AddressValidationResultPartialAddress extends SpeakeasyBase {
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
    addressResidentialIndicator: AddressValidationResultPartialAddressAddressResidentialIndicatorEnum;
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
 * An address validation result
 */
export declare class AddressValidationResult extends SpeakeasyBase {
    /**
     * The matched address found by the Shipengine API
     */
    matchedAddress: AddressValidationResultPartialAddress;
    /**
     * The list of messages that were generated during the address validation request.
     */
    messages: ResponseMessage[];
    /**
     * The original address that was sent for validation
     */
    originalAddress: Address;
    status: AddressValidationStatusEnum;
}
