import { SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";
import { CountryIso2Enum } from "./countryiso2enum";
import { CountryISOEnum } from "./countryisoenum";
import { DatasetEnum } from "./datasetenum";
import { LanguageEnum } from "./languageenum";
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressAdministrativeCountyEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressBuildingNameEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressBuildingNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDeliveryPointSuffixEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDepartmentNameEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDependantLocalityEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDependantThoroughfareEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDistrictEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressDoubleDependantLocalityEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressEastingsEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressNorthingsEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressOrganisationNameEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPoBoxEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPostalCountyEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPostcodeInwardEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPostcodeOutwardEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPostcodeTypeEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressPremiseEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressSuOrganisationIndicatorEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressSubBuildingNameEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressThoroughfareEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressTraditionalCountyEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses. See `id` for address identifier
 */
export declare enum GbrGlobalAddressUmprnEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses. See `id` for address identifier
 */
export declare enum GbrGlobalAddressUprnEnum {
    Unknown = ""
}
/**
 * Not available for non-UK addresses
 */
export declare enum GbrGlobalAddressWardEnum {
    Unknown = ""
}
/**
 * Global (non-UK) address in the UK address format
 */
export declare class GbrGlobalAddress extends SpeakeasyBase {
    /**
     * Not available for non-UK addresses
     */
    administrativeCounty: GbrGlobalAddressAdministrativeCountyEnum;
    /**
     * Not available for non-UK addresses
     */
    buildingName: GbrGlobalAddressBuildingNameEnum;
    /**
     * Not available for non-UK addresses
     */
    buildingNumber: GbrGlobalAddressBuildingNumberEnum;
    /**
     *   Full country names (ISO 3166)
     *
     * @remarks
     *
     */
    country: CountryEnum;
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: CountryISOEnum;
    /**
     *  2 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso2: CountryIso2Enum;
    /**
     * State or county name
     */
    county: string;
    /**
     * Code abbreviation for state or county used in some countries.
     */
    countyCode: string;
    /**
     * Indicates the provenance of an address.
     *
     * @remarks
     *
     *   - `paf` (GBR) Postcode Address File
     *   - `mr` (GBR) Multiple Residence File
     *   - `nyb` (GBR) Not Yet Built File
     *   - `pafa` (GBR) Alias File
     *   - `pafw` (GBR) Welsh File
     *   - `ecaf` (IRL) Eircode ECAF
     *   - `ecad` (IRL) Eircode ECAD
     *   - `usps` (USA) USPS Zip+4
     */
    dataset: DatasetEnum;
    /**
     * Not available for non-UK addresses
     */
    deliveryPointSuffix: GbrGlobalAddressDeliveryPointSuffixEnum;
    /**
     * Not available for non-UK addresses
     */
    departmentName: GbrGlobalAddressDepartmentNameEnum;
    /**
     * Not available for non-UK addresses
     */
    dependantLocality: GbrGlobalAddressDependantLocalityEnum;
    /**
     * Not available for non-UK addresses
     */
    dependantThoroughfare: GbrGlobalAddressDependantThoroughfareEnum;
    /**
     * Not available for non-UK addresses
     */
    district: GbrGlobalAddressDistrictEnum;
    /**
     * Not available for non-UK addresses
     */
    doubleDependantLocality: GbrGlobalAddressDoubleDependantLocalityEnum;
    /**
     * Not available for non-UK addresses
     */
    eastings: GbrGlobalAddressEastingsEnum;
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * Language represented by 2 letter ISO Code (639-1)
     *
     * @remarks
     *
     */
    language: LanguageEnum;
    /**
     * The latitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. `51.5083983`.
     *
     * Returns an empty string if no location data is available.
     */
    latitude: any;
    /**
     * First line of the address. Typically the building number and street name
     */
    line1: string;
    /**
     * Second line of the address. Can be blank
     */
    line2: string;
    /**
     * Third line of the address. Can also be blank
     */
    line3: string;
    /**
     * The longitude of the postcode (WGS84/ETRS89).
     *
     * @remarks
     *
     * Can be a positive or negative decimal. E.g. -0.1283983
     *
     * Returns an empty string if no location data is available.
     */
    longitude: any;
    /**
     * The native representation of a non-UK address
     */
    native: any;
    /**
     * Not available for non-UK addresses
     */
    northings: GbrGlobalAddressNorthingsEnum;
    /**
     * Not available for non-UK addresses
     */
    organisationName: GbrGlobalAddressOrganisationNameEnum;
    /**
     * Not available for non-UK addresses
     */
    poBox: GbrGlobalAddressPoBoxEnum;
    /**
     * The city, town or other primary locality
     *
     * @remarks
     *
     */
    postTown: string;
    /**
     * Not available for non-UK addresses
     */
    postalCounty: GbrGlobalAddressPostalCountyEnum;
    /**
     * Represents the postal or zip code
     */
    postcode: string;
    /**
     * Not available for non-UK addresses
     */
    postcodeInward: GbrGlobalAddressPostcodeInwardEnum;
    /**
     * Not available for non-UK addresses
     */
    postcodeOutward: GbrGlobalAddressPostcodeOutwardEnum;
    /**
     * Not available for non-UK addresses
     */
    postcodeType: GbrGlobalAddressPostcodeTypeEnum;
    /**
     * Not available for non-UK addresses
     */
    premise: GbrGlobalAddressPremiseEnum;
    /**
     * Not available for non-UK addresses
     */
    suOrganisationIndicator: GbrGlobalAddressSuOrganisationIndicatorEnum;
    /**
     * Not available for non-UK addresses
     */
    subBuildingName: GbrGlobalAddressSubBuildingNameEnum;
    /**
     * Not available for non-UK addresses
     */
    thoroughfare: GbrGlobalAddressThoroughfareEnum;
    /**
     * Not available for non-UK addresses
     */
    traditionalCounty: GbrGlobalAddressTraditionalCountyEnum;
    /**
     * Not available for non-UK addresses. See `id` for address identifier
     */
    udprn: string;
    /**
     * Not available for non-UK addresses. See `id` for address identifier
     */
    umprn: GbrGlobalAddressUmprnEnum;
    /**
     * Not available for non-UK addresses. See `id` for address identifier
     */
    uprn: GbrGlobalAddressUprnEnum;
    /**
     * Not available for non-UK addresses
     */
    ward: GbrGlobalAddressWardEnum;
}
