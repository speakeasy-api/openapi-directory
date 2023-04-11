import { SpeakeasyBase } from "../../../internal/utils";
import { OBAddressTypeCodeEnum } from "./obaddresstypecodeenum";
/**
 * Information that locates and identifies a specific address, as defined by postal services.
 */
export declare class OBPostalAddress6 extends SpeakeasyBase {
    addressLine?: string[];
    /**
     * Identifies the nature of the postal address.
     */
    addressType?: OBAddressTypeCodeEnum;
    /**
     * Number that identifies the position of a building on a street.
     */
    buildingNumber?: string;
    /**
     * Nation with its own government.
     */
    country?: string;
    /**
     * Identifies a subdivision of a country such as state, region, county.
     */
    countrySubDivision?: string;
    /**
     * Identification of a division of a large organisation or building.
     */
    department?: string;
    /**
     * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
     */
    postCode?: string;
    /**
     * Name of a street or thoroughfare.
     */
    streetName?: string;
    /**
     * Identification of a sub-division of a large organisation or building.
     */
    subDepartment?: string;
    /**
     * Name of a built-up area, with defined boundaries, and a local government.
     */
    townName?: string;
}
