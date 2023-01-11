import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complete or partial mailing address.
**/
export declare class AddressToValidate extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    addressResidentialIndicator?: Record<string, any>;
    cityLocality: string;
    companyName?: string;
    countryCode: string;
    name?: string;
    phone?: string;
    postalCode?: string;
    stateProvince: string;
}
