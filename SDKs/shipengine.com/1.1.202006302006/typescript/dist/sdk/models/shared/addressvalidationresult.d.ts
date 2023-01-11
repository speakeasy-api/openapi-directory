import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseMessage } from "./responsemessage";
import { Address } from "./address";
import { AddressValidationStatusEnum } from "./addressvalidationstatusenum";
/**
 * A complete or partial mailing address.
**/
export declare class AddressValidationResultPartialAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    addressResidentialIndicator: Record<string, any>;
    cityLocality: string;
    companyName?: string;
    countryCode: string;
    name: string;
    phone: string;
    postalCode: string;
    stateProvince: string;
}
/**
 * An address validation result
**/
export declare class AddressValidationResult extends SpeakeasyBase {
    matchedAddress: AddressValidationResultPartialAddress;
    messages: ResponseMessage[];
    originalAddress: Address;
    status: AddressValidationStatusEnum;
}
