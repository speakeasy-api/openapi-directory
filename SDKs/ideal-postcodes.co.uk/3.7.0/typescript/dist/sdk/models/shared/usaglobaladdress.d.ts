import { SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";
import { CountryIso2Enum } from "./countryiso2enum";
import { CountryISOEnum } from "./countryisoenum";
import { DatasetEnum } from "./datasetenum";
import { LanguageEnum } from "./languageenum";
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressAddressSecondaryAbbreviationEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressBaseAlternateCodeEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressBuildingOrFirmNameEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCarrierRouteIdEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCarrierRouteRateSortationEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCityStateMailingNameIndicatorEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCityStateNameFacilityCodeEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCongressionalDistrictNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressCountyNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressFinanceNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressGovernmentBuildingIndicatorEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressLacsStatusIndicatorEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressLastLineEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressMunicipalityCityStateKeyEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressPlus4CodeEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressPreferredCityEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressPreferredLastLineCityStateKeyEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressPrimaryNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressRecordTypeCodeEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressSecondaryNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressStreetNameEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressStreetPostDirectionalAbbreviationEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressStreetPreDirectionalAbbreviationEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressStreetSuffixAbbreviationEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressUpdateKeyNumberEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressUrbanizationCityStateKeyEnum {
    Unknown = ""
}
/**
 * Not available for non-US addresses
 */
export declare enum UsaGlobalAddressZipClassificationCodeEnum {
    Unknown = ""
}
/**
 * Global (non-US) Address in the US address format
 */
export declare class UsaGlobalAddress extends SpeakeasyBase {
    /**
     * Not available for non-US addresses
     */
    addressSecondaryAbbreviation: UsaGlobalAddressAddressSecondaryAbbreviationEnum;
    /**
     * Not available for non-US addresses
     */
    baseAlternateCode: UsaGlobalAddressBaseAlternateCodeEnum;
    /**
     * Not available for non-US addresses
     */
    buildingOrFirmName: UsaGlobalAddressBuildingOrFirmNameEnum;
    /**
     * Not available for non-US addresses
     */
    carrierRouteId: UsaGlobalAddressCarrierRouteIdEnum;
    /**
     * Not available for non-US addresses
     */
    carrierRouteRateSortation: UsaGlobalAddressCarrierRouteRateSortationEnum;
    /**
     * City name
     */
    city: string;
    /**
     * City name abbreviation (if available)
     */
    cityAbbreviation: string;
    /**
     * Not available for non-US addresses
     */
    cityStateMailingNameIndicator: UsaGlobalAddressCityStateMailingNameIndicatorEnum;
    /**
     * Not available for non-US addresses
     */
    cityStateNameFacilityCode: UsaGlobalAddressCityStateNameFacilityCodeEnum;
    /**
     * Not available for non-US addresses
     */
    congressionalDistrictNumber: UsaGlobalAddressCongressionalDistrictNumberEnum;
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
     * County name
     */
    county: string;
    /**
     * Not available for non-US addresses
     */
    countyNumber: UsaGlobalAddressCountyNumberEnum;
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
     * Not available for non-US addresses
     */
    financeNumber: UsaGlobalAddressFinanceNumberEnum;
    /**
     * Not available for non-US addresses
     */
    governmentBuildingIndicator: UsaGlobalAddressGovernmentBuildingIndicatorEnum;
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * Not available for non-US addresses
     */
    lacsStatusIndicator: UsaGlobalAddressLacsStatusIndicatorEnum;
    /**
     * Language represented by 2 letter ISO Code (639-1)
     *
     * @remarks
     *
     */
    language: LanguageEnum;
    /**
     * Not available for non-US addresses
     */
    lastLine: UsaGlobalAddressLastLineEnum;
    /**
     * First line of address
     */
    line1: string;
    /**
     * Second line of address
     */
    line2: string;
    /**
     * Not available for non-US addresses
     */
    municipalityCityStateKey: UsaGlobalAddressMunicipalityCityStateKeyEnum;
    /**
     * The native representation of a non-US address
     */
    native: any;
    /**
     * Not available for non-US addresses
     */
    plus4Code: UsaGlobalAddressPlus4CodeEnum;
    /**
     * Not available for non-US addresses
     */
    preferredCity: UsaGlobalAddressPreferredCityEnum;
    /**
     * Not available for non-US addresses
     */
    preferredLastLineCityStateKey: UsaGlobalAddressPreferredLastLineCityStateKeyEnum;
    /**
     * Not available for non-US addresses
     */
    primaryNumber: UsaGlobalAddressPrimaryNumberEnum;
    /**
     * Not available for non-US addresses
     */
    recordTypeCode: UsaGlobalAddressRecordTypeCodeEnum;
    /**
     * Not available for non-US addresses
     */
    secondaryNumber: UsaGlobalAddressSecondaryNumberEnum;
    /**
     * State or province
     */
    state: string;
    /**
     * Code of state or province (if available)
     */
    stateAbbreviation: string;
    /**
     * Not available for non-US addresses
     */
    streetName: UsaGlobalAddressStreetNameEnum;
    /**
     * Not available for non-US addresses
     */
    streetPostDirectionalAbbreviation: UsaGlobalAddressStreetPostDirectionalAbbreviationEnum;
    /**
     * Not available for non-US addresses
     */
    streetPreDirectionalAbbreviation: UsaGlobalAddressStreetPreDirectionalAbbreviationEnum;
    /**
     * Not available for non-US addresses
     */
    streetSuffixAbbreviation: UsaGlobalAddressStreetSuffixAbbreviationEnum;
    /**
     * Not available for non-US addresses
     */
    updateKeyNumber: UsaGlobalAddressUpdateKeyNumberEnum;
    /**
     * Not available for non-US addresses
     */
    urbanizationCityStateKey: UsaGlobalAddressUrbanizationCityStateKeyEnum;
    /**
     * Not available for non-US addresses
     */
    zipClassificationCode: UsaGlobalAddressZipClassificationCodeEnum;
    /**
     * Partial postcode of address
     */
    zipCode: string;
    /**
     * Full postal code of address
     */
    zipPlus4Code: string;
}
