import { SpeakeasyBase } from "../../../internal/utils";
import { BaseAlternateCodeEnum } from "./basealternatecodeenum";
import { CityStateNameFacilityCodeEnum } from "./citystatenamefacilitycodeenum";
import { GovernmentBuildingIndicatorEnum } from "./governmentbuildingindicatorenum";
import { LacsStatusIndicatorEnum } from "./lacsstatusindicatorenum";
import { RecordTypeCodeEnum } from "./recordtypecodeenum";
import { UspsCountryEnum } from "./uspscountryenum";
import { UspsCountryIso2Enum } from "./uspscountryiso2enum";
import { UspsCountryIsoEnum } from "./uspscountryisoenum";
import { UspsDatasetEnum } from "./uspsdatasetenum";
import { UspsLanguageEnum } from "./uspslanguageenum";
import { ZipClassificationCodeEnum } from "./zipclassificationcodeenum";
/**
 * Standard USA Address
 */
export declare class UspsAddress extends SpeakeasyBase {
    /**
     * A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field.
     *
     * @remarks
     * This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers.
     */
    addressSecondaryAbbreviation: string;
    /**
     * Code that specifies whether a record is a base (preferred) or alternate record.
     *
     * @remarks
     * Base records (represented as "B") can represent a range of addresses or an individual address, such as a firm record, while alternate records (represented as "A") are individual delivery points. Base records are generally preferred over alternate records.
     * Government deliveries will only be listed on alternate records with the appropriate government building indicator (federal, state, or city) set.
     */
    baseAlternateCode: BaseAlternateCodeEnum;
    /**
     * The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information.
     *
     * @remarks
     * This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.”
     */
    buildingOrFirmName: string;
    /**
     * A 4 character ID identifying the postal route for the address.
     *
     * @remarks
     * The first character indicates the route type. Specifically:
     * - "B" indicates PO Box
     * - "H" indicates highway
     * - "C" indicates city
     * - "G" indicates general
     * - "R" indicates rural
     */
    carrierRouteId: string;
    /**
     * Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed.
     */
    carrierRouteRateSortation: string;
    /**
     * A valid city name for mailing purposes; appears in the last line of an address on a mail piece.
     */
    city: string;
    /**
     * A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of "Y." If the field is longer than 13 characters and the city/state mailing name indicator is "N," the field will be blank.
     */
    cityAbbreviation: string;
    /**
     * Specifies whether or not the city state name can be used as a last line of address on a mail piece.
     *
     * @remarks
     * - "Y = City/state name is a USPS-approved mailing name."
     * - "N = City/state name is not approved for mailing purposes."
     */
    cityStateMailingNameIndicator: string;
    /**
     * The type of locale identified in the city/state name. The facility may be a USPS facility, such as a post office, station, or branch, or it may be a non-postal place name. City/state name facility codes include the following:
     *
     * @remarks
     * - B = Branch
     * - C = Community post office (CPO)
     * - N = Non-postal community name, former USPS facility, or place name
     * - P = Post Office
     * - S = Station
     * - U = Urbanization
     */
    cityStateNameFacilityCode: CityStateNameFacilityCodeEnum;
    /**
     * A standard value identifying a geographic area within the United States served by a member of the U.S. House of Representatives. If Army/Air Force (APO), Fleet Post Office (FPO), or Diplomatic/Defense Post Office (DPO), this field will be blank. If there is only one member of Congress within a state, the code will be "AL" (at large).
     */
    congressionalDistrictNumber: any;
    /**
     *   Full country names (ISO 3166)
     *
     * @remarks
     *
     */
    country: UspsCountryEnum;
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: UspsCountryIsoEnum;
    /**
     *  2 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso2: UspsCountryIso2Enum;
    /**
     * The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank.
     */
    county: string;
    /**
     * The Federal Information Processing Standard (FIPS) code assigned to a given county or parish within a state. In Alaska, it identifies a region within the state. If APO/FPO/DPO, and the record type is “S,” “H,” or “F,” the county number will be blank.
     */
    countyNumber: any;
    /**
     * Identifies the address as sourced from USPS
     */
    dataset: UspsDatasetEnum;
    /**
     * A code assigned to Postal Service facilities (primarily Post Offices) to collect cost and statistical data and compile revenue and expense data.
     */
    financeNumber: any;
    /**
     * An alphabetic value that identifies the type of government agency at the delivery point and/or whether a firm is the only delivery at an address. For this purpose, "address" is defined as the complete delivery line (e.g., complete street address and, if included as part of the firm record, the secondary abbreviation and/or address secondary number).
     *
     * @remarks
     * - A = City government building—alternates only
     * - B = Federal government building—alternates only
     * - C = State government building—alternates only
     * - D = Firm only—base and alternates
     * - E = City government building and firm only—alternates only
     * - F = Federal government building and firm only—alternates only
     * - G = State government building and firm only—alternates only
     */
    governmentBuildingIndicator: GovernmentBuildingIndicatorEnum;
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * The Locatable Address Conversion Service (LACS) indicator describes records that have been converted to the LACS system (a product/system in a different USPS® product line that allows mailers to identify and convert a rural route address to a city-style address). Rural route and some city addresses are being modified to city-style addresses so that emergency services (e.g., ambulances, police) can find these addresses more efficiently.
     *
     * @remarks
     * - L = LACS address: The old (usually rural-route) address that has been converted for the LACS system.
     * - Blank = Not applicable
     */
    lacsStatusIndicator: LacsStatusIndicatorEnum;
    /**
     * Language represented by 2 letter ISO Code (639-1)
     *
     * @remarks
     *
     */
    language: UspsLanguageEnum;
    /**
     * Last line of the address comprising of city, state, zip code and zip+4
     */
    lastLine: string;
    /**
     * The primary delivery line (usually the street address) of the address.
     */
    line1: string;
    /**
     * Secondary delivery line of the address. Typically populated if the first line is the firm or building name.
     */
    line2: string;
    /**
     * Municipality City State Key. Currently blank.
     */
    municipalityCityStateKey: string;
    /**
     * 4 digit ZIP add-on code.
     */
    plus4Code: string;
    /**
     * Field that contains the default preferred or alternate preferred last-line name for a ZIP Code.
     */
    preferredCity: string;
    /**
     * In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code.
     */
    preferredLastLineCityStateKey: string;
    /**
     * A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number.
     */
    primaryNumber: string;
    /**
     * An alphabetic value that identifies the type of data in the record. - G = General delivery (5-Digit ZIP, ZIP + 4, and Carrier Route products) - H = High-rise (ZIP + 4 only) - F = Firm (ZIP + 4 only) - S = Street (5-Digit ZIP, ZIP + 4, and Carrier Route products) - P = PO Box (5-Digit ZIP, ZIP + 4, and Carrier Route products) - R = Rural route/contract (5-Digit ZIP, ZIP + 4, and Carrier Route products) - M = Multi-carrier (Carrier Route product only)
     */
    recordTypeCode: RecordTypeCodeEnum;
    /**
     * Number of the sub unit, apartment, suite etc
     */
    secondaryNumber: string;
    /**
     * Full name of a state, U.S. territory, or armed forces ZIP Code designation.
     */
    state: string;
    /**
     * A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.”
     */
    stateAbbreviation: string;
    /**
     * The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT.
     */
    streetName: string;
    /**
     * A geographic direction that follows the street name.
     */
    streetPostDirectionalAbbreviation: string;
    /**
     * A geographic direction that precedes the street name.
     */
    streetPreDirectionalAbbreviation: string;
    /**
     * Code that is the standard USPS abbreviation for the trailing designator in a street address.
     */
    streetSuffixAbbreviation: string;
    /**
     * Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA.
     */
    updateKeyNumber: string;
    /**
     * An index to the City State file that provides the urbanization name for this delivery range.
     */
    urbanizationCityStateKey: string;
    /**
     * A field that describes the type of ZIP area that a 5-digit ZIP Code serves, e.g., a single educational institution, post office boxes only, or a single address that has unusually high mail volume or many different addresses.
     *
     * @remarks
     *  - M = Military ZIP Code
     *  - P = ZIP Code having only Post Office Boxes
     *  - U = Unique ZIP Code (ZIP assigned to a single organization)
     *  - Blank = Standard ZIP with many addresses assigned to it
     */
    zipClassificationCode: ZipClassificationCodeEnum;
    /**
     * A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume.
     */
    zipCode: string;
    /**
     * Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece.
     */
    zipPlus4Code: string;
}
